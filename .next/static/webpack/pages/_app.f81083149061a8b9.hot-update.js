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

/***/ "./components/CommentsForm.tsx":
/*!*************************************!*\
  !*** ./components/CommentsForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./services/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//Services\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CommentsForm = function(param) {\n    var slug = param.slug;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error = ref[0], setError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), localStorage = ref1[0], setLocalStorage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSuccessMessage = ref2[0], setShowSuccessMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: null,\n        email: null,\n        comment: null,\n        storeData: false\n    }), formData = ref3[0], setFormData = ref3[1];\n    //Stores comment-user data in local storage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLocalStorage(window.localStorage);\n        var initalFormData = {\n            name: window.localStorage.getItem('name'),\n            email: window.localStorage.getItem('email'),\n            storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email')\n        };\n        setFormData(initalFormData);\n    }, []);\n    var onInputChange = function(e) {\n        var target = e.target;\n        if (target.type === 'checkbox') {\n            setFormData(function(prevState) {\n                return _objectSpread({\n                }, prevState, _defineProperty({\n                }, target.name, target.checked));\n            });\n        } else {\n            setFormData(function(prevState) {\n                return _objectSpread({\n                }, prevState, _defineProperty({\n                }, target.name, target.value));\n            });\n        }\n    };\n    var handlePostSubmission = function() {\n        setError(false);\n        var name = formData.name, email = formData.email, comment = formData.comment, storeData = formData.storeData;\n        if (!name || !email || !comment) {\n            setError(true);\n            return;\n        }\n        var commentObj = {\n            name: name,\n            email: email,\n            comment: comment,\n            slug: slug\n        };\n        if (storeData) {\n            localStorage.setItem('name', name);\n            localStorage.setItem('email', email);\n        } else {\n            localStorage.removeItem('name');\n            localStorage.removeItem('email');\n        }\n        (0,_services__WEBPACK_IMPORTED_MODULE_2__.submitComment)(commentObj).then(function(res) {\n            if (res.createComment) {\n                if (!storeData) {\n                    formData.name = '';\n                    formData.email = '';\n                }\n                formData.comment = '';\n                setFormData(function(prevState) {\n                    return _objectSpread({\n                    }, prevState, formData);\n                });\n                setShowSuccessMessage(true);\n                setTimeout(function() {\n                    setShowSuccessMessage(false);\n                }, 3000);\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-black bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n            lineNumber: 80,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"text-xl text-gray-200 mb-8 font-semibold border-b titles-names pb-4\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Leave a Reply\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 mb-4\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                    value: formData.comment,\n                    onChange: onInputChange,\n                    className: \"p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700\",\n                    name: \"comment\",\n                    placeholder: \"Comment\",\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        value: formData.name,\n                        onChange: onInputChange,\n                        className: \"py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700\",\n                        placeholder: \"Name\",\n                        name: \"name\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"email\",\n                        value: formData.email,\n                        onChange: onInputChange,\n                        className: \"py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700\",\n                        placeholder: \"Email\",\n                        name: \"email\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 mb-4\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            checked: formData.storeData,\n                            onChange: onInputChange,\n                            type: \"checkbox\",\n                            id: \"storeData\",\n                            name: \"storeData\",\n                            value: \"true\",\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            className: \"text-gray-500 cursor-pointer\",\n                            htmlFor: \"storeData\",\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \" Save my name, email in this browser for the next time I comment.\"\n                        })\n                    ]\n                })\n            }),\n            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"text-xs text-red-500\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"All fields are mandatory\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"mt-8 text-center\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        type: \"button\",\n                        onClick: handlePostSubmission,\n                        className: \"transition duration-500 ease hover:bg-indigo-900 inline-block bg-purple-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Post Comment\"\n                    }),\n                    showSuccessMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"text-xl float-right font-semibold mt-3 text-green-500\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/CommentsForm.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 32\n                        },\n                        __self: _this,\n                        children: \"Comment submitted for review\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(CommentsForm, \"svgeqaM0Z5s214YK4NR82gKcobw=\");\n_c = CommentsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentsForm);\nvar _c;\n$RefreshReg$(_c, \"CommentsForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsU0FBUyxFQUFDLENBQXNCOzs7Ozs7OzBCQUFDLENBQXdCOztrRkFDckVELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFrQjs7Ozs7Ozs7eUZBQzlCVSxDQUFNO3dCQUFDdkIsSUFBSSxFQUFDLENBQVE7d0JBQUN3QixPQUFPLEVBQUVwQixvQkFBb0I7d0JBQUVTLFNBQVMsRUFBQyxDQUFrSjs7Ozs7OztrQ0FBQyxDQUFZOztvQkFDN04zQixrQkFBa0IseUVBQUt1QyxDQUFJO3dCQUFDWixTQUFTLEVBQUMsQ0FBdUQ7Ozs7Ozs7a0NBQUMsQ0FBNEI7Ozs7OztBQUluSSxDQUFDO0dBaEdLakMsWUFBWTtLQUFaQSxZQUFZO0FBa0dsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudHNGb3JtLnRzeD82MmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGQyB9IGZyb20gJ3JlYWN0Jztcbi8vU2VydmljZXNcbmltcG9ydCB7IHN1Ym1pdENvbW1lbnQgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDb21tZW50VHlwZSB9IGZyb20gJy4uL1R5cGVEZWZzJztcblxuY29uc3QgQ29tbWVudHNGb3JtOiBGQzx7c2x1Zzogc3RyaW5nLCBmb3JtRGF0YT86IENvbW1lbnRUeXBlfT4gPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dTdWNjZXNzTWVzc2FnZSwgc2V0U2hvd1N1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxDb21tZW50VHlwZT4oeyBuYW1lOiBudWxsLCBlbWFpbDogbnVsbCwgY29tbWVudDogbnVsbCwgc3RvcmVEYXRhOiBmYWxzZSB9KTtcbiAgLy9TdG9yZXMgY29tbWVudC11c2VyIGRhdGEgaW4gbG9jYWwgc3RvcmFnZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvY2FsU3RvcmFnZSh3aW5kb3cubG9jYWxTdG9yYWdlKTtcbiAgICBjb25zdCBpbml0YWxGb3JtRGF0YTogQ29tbWVudFR5cGUgPSB7XG4gICAgICBuYW1lOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSxcbiAgICAgIGVtYWlsOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyksXG4gICAgICBzdG9yZURhdGE6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSxcbiAgICB9O1xuICAgIHNldEZvcm1EYXRhKGluaXRhbEZvcm1EYXRhKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGFyZ2V0Lm5hbWVdOiB0YXJnZXQuY2hlY2tlZCxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGFyZ2V0Lm5hbWVdOiB0YXJnZXQudmFsdWUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RTdWJtaXNzaW9uID0gKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBjb21tZW50LCBzdG9yZURhdGEgfSA9IGZvcm1EYXRhO1xuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIWNvbW1lbnQpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50T2JqID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgY29tbWVudCxcbiAgICAgIHNsdWcsXG4gICAgfTtcblxuICAgIGlmIChzdG9yZURhdGEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgbmFtZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCBlbWFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduYW1lJyk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKTtcbiAgICB9XG5cbiAgICBzdWJtaXRDb21tZW50KGNvbW1lbnRPYmopXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuY3JlYXRlQ29tbWVudCkge1xuICAgICAgICAgIGlmICghc3RvcmVEYXRhKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5uYW1lID0gJyc7XG4gICAgICAgICAgICBmb3JtRGF0YS5lbWFpbCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtRGF0YS5jb21tZW50ID0gJyc7XG4gICAgICAgICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBzZXRTaG93U3VjY2Vzc01lc3NhZ2UodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93U3VjY2Vzc01lc3NhZ2UoZmFsc2UpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS0yNSBzaGFkb3cteGwgcm91bmRlZC1sZyBwLTAgbGc6cC04IHBiLTEyIG1iLThcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS0yMDAgbWItOCBmb250LXNlbWlib2xkIGJvcmRlci1iIHRpdGxlcy1uYW1lcyBwYi00XCI+TGVhdmUgYSBSZXBseTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWItNFwiPlxuICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Zvcm1EYXRhLmNvbW1lbnR9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJwLTQgb3V0bGluZS1ub25lIHctZnVsbCByb3VuZGVkLWxnIGgtNDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS0yMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC00IG1iLTRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJweS0yIHB4LTQgb3V0bGluZS1ub25lIHctZnVsbCByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJweS0yIHB4LTQgb3V0bGluZS1ub25lIHctZnVsbCByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG1iLTRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2hlY2tlZD17Zm9ybURhdGEuc3RvcmVEYXRhfSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzdG9yZURhdGFcIiBuYW1lPVwic3RvcmVEYXRhXCIgdmFsdWU9XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBjdXJzb3ItcG9pbnRlclwiIGh0bWxGb3I9XCJzdG9yZURhdGFcIj4gU2F2ZSBteSBuYW1lLCBlbWFpbCBpbiB0aGlzIGJyb3dzZXIgZm9yIHRoZSBuZXh0IHRpbWUgSSBjb21tZW50LjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5BbGwgZmllbGRzIGFyZSBtYW5kYXRvcnk8L3A+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVBvc3RTdWJtaXNzaW9ufSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIGhvdmVyOmJnLWluZGlnby05MDAgaW5saW5lLWJsb2NrIGJnLXB1cnBsZS01MDAgdGV4dC1sZyBmb250LW1lZGl1bSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBweC04IHB5LTMgY3Vyc29yLXBvaW50ZXJcIj5Qb3N0IENvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAge3Nob3dTdWNjZXNzTWVzc2FnZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZsb2F0LXJpZ2h0IGZvbnQtc2VtaWJvbGQgbXQtMyB0ZXh0LWdyZWVuLTUwMFwiPkNvbW1lbnQgc3VibWl0dGVkIGZvciByZXZpZXc8L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0Zvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1Ym1pdENvbW1lbnQiLCJDb21tZW50c0Zvcm0iLCJzbHVnIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvY2FsU3RvcmFnZSIsInNldExvY2FsU3RvcmFnZSIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNldFNob3dTdWNjZXNzTWVzc2FnZSIsIm5hbWUiLCJlbWFpbCIsImNvbW1lbnQiLCJzdG9yZURhdGEiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwid2luZG93IiwiaW5pdGFsRm9ybURhdGEiLCJnZXRJdGVtIiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicHJldlN0YXRlIiwiY2hlY2tlZCIsInZhbHVlIiwiaGFuZGxlUG9zdFN1Ym1pc3Npb24iLCJjb21tZW50T2JqIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0aGVuIiwicmVzIiwiY3JlYXRlQ29tbWVudCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImlucHV0IiwiaWQiLCJsYWJlbCIsImh0bWxGb3IiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentsForm.tsx\n");

/***/ })

});