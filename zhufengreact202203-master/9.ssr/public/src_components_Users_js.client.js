"use strict";
(self["webpackChunk_9_ssr"] = self["webpackChunk_9_ssr"] || []).push([["src_components_Users_js"],{

/***/ "./src/components/Users.js":
/*!*********************************!*\
  !*** ./src/components/Users.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Users(_ref) {
  var resource = _ref.resource;
  var list = resource.read();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: user.id
    }, user.name);
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

}]);