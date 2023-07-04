"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./axios.ts":
/*!******************!*\
  !*** ./axios.ts ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    // baseURL: \"http://localhost:3001/\",\n    baseURL: \"http://18.181.165.223:3000/\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9heGlvcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCLHFDQUFxQztJQUNyQ0csU0FBUztBQUNYO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9heGlvcy50cz8yZWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgLy8gYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXCIsXHJcbiAgYmFzZVVSTDogXCJodHRwOi8vMTguMTgxLjE2NS4yMjM6MzAwMC9cIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./axios.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../axios */ \"(api)/./axios.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_2__]);\n_axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ user }) {\n            try {\n                await _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`user`, {\n                    user_id: user.id,\n                    username: user.name,\n                    image: user.image,\n                    email: user.email\n                });\n                return true;\n            } catch (error) {\n                if (error.response.status === 400) {\n                    return true;\n                }\n            }\n        },\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.uid;\n            }\n            return session;\n        },\n        jwt: async ({ user, token })=>{\n            if (user) {\n                token.uid = user.id;\n            }\n            return token;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRTtBQUN2QjtBQUUxQixNQUFNSSxjQUFjO0lBQ3pCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLE1BQU07SUFDMUJDLFdBQVc7UUFDVFAsaUVBQWNBLENBQUM7WUFDYlEsVUFBVUosUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENDLGNBQWNOLFFBQVFDLEdBQUcsQ0FBQ00sb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLFFBQU8sRUFBRUMsSUFBSSxFQUFFO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTWIsbURBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNyQmUsU0FBU0YsS0FBS0csRUFBRTtvQkFDaEJDLFVBQVVKLEtBQUtLLElBQUk7b0JBQ25CQyxPQUFPTixLQUFLTSxLQUFLO29CQUNqQkMsT0FBT1AsS0FBS08sS0FBSztnQkFDbkI7Z0JBQ0EsT0FBTztZQUNULEVBQUUsT0FBT0MsT0FBTztnQkFDZCxJQUFJQSxNQUFNQyxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLO29CQUNqQyxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBQyxTQUFTLE9BQU8sRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDaEMsSUFBSUQsU0FBU1gsTUFBTTtnQkFDakJXLFFBQVFYLElBQUksQ0FBQ0csRUFBRSxHQUFHUyxNQUFNQyxHQUFHO1lBQzdCO1lBQ0EsT0FBT0Y7UUFDVDtRQUNBRyxLQUFLLE9BQU8sRUFBRWQsSUFBSSxFQUFFWSxLQUFLLEVBQUU7WUFDekIsSUFBSVosTUFBTTtnQkFDUlksTUFBTUMsR0FBRyxHQUFHYixLQUFLRyxFQUFFO1lBQ3JCO1lBQ0EsT0FBT1M7UUFDVDtJQUNGO0lBQ0FELFNBQVM7UUFDUEksVUFBVTtJQUNaO0FBQ0YsRUFBRTtBQUVGLGlFQUFlL0IsZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi8uLi9heGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBhcGkucG9zdChgdXNlcmAsIHtcclxuICAgICAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcclxuICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi51aWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgand0OiBhc3luYyAoeyB1c2VyLCB0b2tlbiB9KSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4udWlkID0gdXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiTmV4dEF1dGhPcHRpb25zIiwiR29vZ2xlUHJvdmlkZXIiLCJhcGkiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJwb3N0IiwidXNlcl9pZCIsImlkIiwidXNlcm5hbWUiLCJuYW1lIiwiaW1hZ2UiLCJlbWFpbCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZXNzaW9uIiwidG9rZW4iLCJ1aWQiLCJqd3QiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();