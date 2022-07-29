/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routesConfig */ "./src/routesConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/actionCreators/auth */ "./src/store/actionCreators/auth.js");







function App(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

App.loadData = function (store) {
  return store.dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__["default"].validate());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var request = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request); //request.get('/api/users');

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/counter"
  }, "Counter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/list"
  }, "User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/logout"
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/profile"
  }, "Profile")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/routesConfig.js":
/*!*****************************!*\
  !*** ./src/routesConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/Home */ "./src/routes/Home.js");
/* harmony import */ var _routes_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/Counter */ "./src/routes/Counter.js");
/* harmony import */ var _routes_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/User */ "./src/routes/User.js");
/* harmony import */ var _routes_UserAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/UserAdd */ "./src/routes/UserAdd.js");
/* harmony import */ var _routes_UserList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/UserList */ "./src/routes/UserList.js");
/* harmony import */ var _routes_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/Login */ "./src/routes/Login.js");
/* harmony import */ var _routes_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/Logout */ "./src/routes/Logout.js");
/* harmony import */ var _routes_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Profile */ "./src/routes/Profile.js");
/* harmony import */ var _routes_NotFound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/NotFound */ "./src/routes/NotFound.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  index: true,
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  path: '/counter',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, {
  path: '/user',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_User__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  children: [{
    path: '/user/add',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserAdd__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, {
    path: '/user/list',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserList__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    index: true
  }]
}, {
  path: '/login',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Login__WEBPACK_IMPORTED_MODULE_6__["default"], null)
}, {
  path: '/logout',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Logout__WEBPACK_IMPORTED_MODULE_7__["default"], null)
}, {
  path: '/profile',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], null)
}, {
  path: '*',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_NotFound__WEBPACK_IMPORTED_MODULE_9__["default"], null)
}]);

/***/ }),

/***/ "./src/routes/Counter.js":
/*!*******************************!*\
  !*** ./src/routes/Counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/counter */ "./src/store/actionCreators/counter.js");




function Counter() {
  var number = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.counter.number;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return dispatch(_store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__["default"].add());
    }
  }, "+"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/routes/Home.js":
/*!****************************!*\
  !*** ./src/routes/Home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ "./src/routes/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader-react18/withStyles */ "isomorphic-style-loader-react18/withStyles");
/* harmony import */ var isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);

 //import useStyles from 'isomorphic-style-loader-react18/useStyles';




function Home() {
  //useStyles(styles);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "\u6211\u662F\u9996\u9875\u7684\u6807\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "\u6211\u662F\u9996\u9875\u7684\u63CF\u8FF0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_Home_css__WEBPACK_IMPORTED_MODULE_1___default().theme)
  }, "Home"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_Home_css__WEBPACK_IMPORTED_MODULE_1___default()))(Home)); //style-loader不需要withStyles也不需要useStyles

/***/ }),

/***/ "./src/routes/Login.js":
/*!*****************************!*\
  !*** ./src/routes/Login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/auth */ "./src/store/actionCreators/auth.js");




function Login() {
  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var name = nameRef.current.value;
    var user = {
      name: name
    };
    dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__["default"].login(user));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, "\u7528\u6237\u540D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: nameRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/routes/Logout.js":
/*!******************************!*\
  !*** ./src/routes/Logout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actionCreators/auth */ "./src/store/actionCreators/auth.js");




function Logout() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__["default"].logout());
    }
  }, "\u9000\u51FA");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./src/routes/NotFound.js":
/*!********************************!*\
  !*** ./src/routes/NotFound.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "NotFound");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/routes/Profile.js":
/*!*******************************!*\
  !*** ./src/routes/Profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




function Profile() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!user) navigate('/login');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u5F53\u524D\u767B\u5F55\u7528\u6237"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "name:", user && user.name));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/routes/User.js":
/*!****************************!*\
  !*** ./src/routes/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function User() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/add"
  }, "\u6DFB\u52A0\u7528\u6237")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/list"
  }, "\u7528\u6237\u5217\u8868"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/routes/UserAdd.js":
/*!*******************************!*\
  !*** ./src/routes/UserAdd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actionCreators/user */ "./src/store/actionCreators/user.js");





function UserAdd() {
  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var name = nameRef.current.value; //添加用户

    dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__["default"].addUser({
      id: Date.now(),
      name: name
    })); //跳转到用户列表页

    navigate('/user/list');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, "\u7528\u6237\u540D ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: nameRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAdd);

/***/ }),

/***/ "./src/routes/UserList.js":
/*!********************************!*\
  !*** ./src/routes/UserList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/user */ "./src/store/actionCreators/user.js");



var LazyUserList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_Users_js").then(__webpack_require__.bind(__webpack_require__, /*! @/components/Users */ "./src/components/Users.js"));
});

function UserList() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var resourceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (!resourceRef.current) {
    var promise = dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_2__["default"].getUserList());
    var resource = wrapPromise(promise);
    resourceRef.current = resource;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Users\u4E0A\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "loading userList....")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LazyUserList, {
    resource: resourceRef.current
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Users\u4E0B\u9762"));
}
/* function getUserList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'zhufeng1' }, { id: 2, name: 'zhufeng2' }, { id: 3, name: 'zhufeng3' }]);
    }, 10000);
  });
} */


function wrapPromise(promise) {
  var status = 'pending';
  var result;
  var suspender = promise.then(function (r) {
    status = 'success';
    result = r;
  }, function (e) {
    status = 'error';
    result = e;
  });
  return {
    read: function read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var request = function request(req) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'http://localhost:5000/',
    headers: {
      cookie: req.get('cookie') || ''
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request); //request.get('/api/users');
//request.get('http://localhost:5000/api/users');

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD": () => (/* binding */ ADD),
/* harmony export */   "ADD_USER": () => (/* binding */ ADD_USER),
/* harmony export */   "LOGIN_ERROR": () => (/* binding */ LOGIN_ERROR),
/* harmony export */   "LOGIN_SUCCESS": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "LOGOUT_SUCCESS": () => (/* binding */ LOGOUT_SUCCESS),
/* harmony export */   "SET_USER_LIST": () => (/* binding */ SET_USER_LIST)
/* harmony export */ });
var ADD = 'ADD'; //我们要调接口返回用户列表，并且把用户列表的数据放置到仓库里

var SET_USER_LIST = 'SET_USER_LIST';
var ADD_USER = 'ADD_USER';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_ERROR = 'LOGIN_ERROR';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/***/ }),

/***/ "./src/store/actionCreators/auth.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/auth.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-first-history */ "redux-first-history");
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_1__);


var actionCreators = {
  login: function login(user) {
    return function (dispatch, getState, request) {
      return request.post('/api/login', user).then(function (res) {
        var _res$data = res.data,
            success = _res$data.success,
            data = _res$data.data,
            error = _res$data.error;

        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS,
            payload: data
          });
          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_1__.push)('/profile'));
        } else {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_ERROR,
            payload: error
          });
        }
      });
    };
  },
  logout: function logout() {
    return function (dispatch, getState, request) {
      return request.get('/api/logout').then(function (res) {
        var success = res.data.success;

        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_SUCCESS
          });
          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_1__.push)('/login'));
        }
      });
    };
  },
  validate: function validate() {
    return function (dispatch, getState, request) {
      return request.get('/api/validate').then(function (res) {
        var _res$data2 = res.data,
            success = _res$data2.success,
            data = _res$data2.data;

        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS,
            payload: data
          });
        }
      });
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/actionCreators/counter.js":
/*!*********************************************!*\
  !*** ./src/store/actionCreators/counter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var actionCreators = {
  add: function add() {
    return {
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/actionCreators/user.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var actionCreators = {
  getUserList: function getUserList() {
    return function (dispatch, getState, request) {
      return request.get("/api/users").then(function (response) {
        var data = response.data.data;
        dispatch({
          type: _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_LIST,
          payload: data //用户列表的数组

        });
        return getState().user.list;
      });
    };
  },
  addUser: function addUser(user) {
    return {
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER,
      payload: user
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientStore": () => (/* binding */ getClientStore),
/* harmony export */   "getServerStore": () => (/* binding */ getServerStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise */ "redux-promise");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/counter */ "./src/store/reducers/counter.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/user */ "./src/store/reducers/user.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/auth */ "./src/store/reducers/auth.js");
/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/client/request */ "./src/client/request.js");
/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/server/request */ "./src/server/request.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-first-history */ "redux-first-history");
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_10__);











function getClientStore() {
  var initialState = window.context.state;

  var _createReduxHistoryCo = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_10__.createReduxHistoryContext)({
    history: (0,history__WEBPACK_IMPORTED_MODULE_9__.createBrowserHistory)()
  }),
      createReduxHistory = _createReduxHistoryCo.createReduxHistory,
      routerMiddleware = _createReduxHistoryCo.routerMiddleware,
      routerReducer = _createReduxHistoryCo.routerReducer;

  var reducers = {
    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_4__["default"],
    user: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["default"],
    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_6__["default"],
    router: routerReducer
  };
  var combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_7__["default"]), (redux_promise__WEBPACK_IMPORTED_MODULE_2___default()), routerMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_3___default()))(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combinedReducer, initialState);
  var history = createReduxHistory(store);
  return {
    store: store,
    history: history
  };
}
function getServerStore(req) {
  var _createReduxHistoryCo2 = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_10__.createReduxHistoryContext)({
    history: (0,history__WEBPACK_IMPORTED_MODULE_9__.createMemoryHistory)()
  }),
      createReduxHistory = _createReduxHistoryCo2.createReduxHistory,
      routerMiddleware = _createReduxHistoryCo2.routerMiddleware,
      routerReducer = _createReduxHistoryCo2.routerReducer;

  var reducers = {
    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_4__["default"],
    user: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["default"],
    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_6__["default"],
    router: routerReducer
  };
  var combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument((0,_server_request__WEBPACK_IMPORTED_MODULE_8__["default"])(req)), (redux_promise__WEBPACK_IMPORTED_MODULE_2___default()), routerMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_3___default()))(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combinedReducer);
  var history = createReduxHistory(store);
  return {
    store: store,
    history: history
  };
}

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var initialState = {
  user: null,
  error: null
};

function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: null
      };

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_ERROR:
      return {
        user: null,
        error: action.payload
      };

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_SUCCESS:
      return {
        user: null,
        error: null
      };

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var initialState = {
  number: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD:
      return {
        number: state.number + 1
      };

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/store/reducers/user.js":
/*!************************************!*\
  !*** ./src/store/reducers/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var initialState = {
  list: []
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_LIST:
      return {
        list: action.payload
      };

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER:
      return {
        list: [].concat(_toConsumableArray(state.list), [action.payload])
      };

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-routes-Home {\r\n  color: red;\r\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"theme": "src-routes-Home"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/routes/Home.css":
/*!*****************************!*\
  !*** ./src/routes/Home.css ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./Home.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css");
    var css_default = css.default || css;
    var insertCss = __webpack_require__(/*! !../../node_modules/isomorphic-style-loader-react18/insertCss.js */ "./node_modules/isomorphic-style-loader-react18/insertCss.js");
    var content = typeof css_default === 'string' ? [[module.id, css_default, '']] : css_default;

    exports = module.exports = css_default.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css_default; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader-react18/insertCss.js":
/*!*******************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader-react18/insertCss.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("history");

/***/ }),

/***/ "isomorphic-style-loader-react18/StyleContext":
/*!***************************************************************!*\
  !*** external "isomorphic-style-loader-react18/StyleContext" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader-react18/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader-react18/withStyles":
/*!*************************************************************!*\
  !*** external "isomorphic-style-loader-react18/withStyles" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader-react18/withStyles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-first-history":
/*!**************************************!*\
  !*** external "redux-first-history" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-first-history");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-promise");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-style-loader-react18/StyleContext */ "isomorphic-style-loader-react18/StyleContext");
/* harmony import */ var isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routesConfig */ "./src/routesConfig.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/App */ "./src/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var express = __webpack_require__(/*! express */ "express");

var app = express();
app.use(express["static"]('public'));
app.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:5000', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/api".concat(req.url);
  }
}));
app.get('*', function (req, res) {
  var routeMatches = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pathname: req.url
  });

  if (routeMatches) {
    var _getServerStore = (0,_store__WEBPACK_IMPORTED_MODULE_9__.getServerStore)(req),
        store = _getServerStore.store; //因为我们本次渲染可以会走多个数据加载方法，进行多次接口调用，可能有些成功了，有些失败了
    //默认情况下，如果有一个接口接口失败了，整个应用加载失败了，所以我们要不管成功还是失败都变成成功


    var loadDataPromises = routeMatches.map(function (match) {
      return match.route.element.type.loadData && match.route.element.type.loadData(store).then(function (data) {
        return data;
      }, function (error) {
        return error;
      });
    }).concat(_App__WEBPACK_IMPORTED_MODULE_8__["default"].loadData && _App__WEBPACK_IMPORTED_MODULE_8__["default"].loadData(store)).filter(Boolean);
    Promise.all(loadDataPromises).then(function () {
      if (req.url === '/profile' && !store.getState().auth.user) {
        return res.redirect('/login');
      } else if (routeMatches[routeMatches.length - 1].route.path === '*') {
        res.statusCode = 404;
      }

      var css = new Set();

      var insertCss = function insertCss() {
        for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
          styles[_key] = arguments[_key];
        }

        styles.forEach(function (style) {
          css.add(style._getCss());
        });
      };

      var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic();

      var _renderToPipeableStre = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToPipeableStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
        location: req.url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_5___default().Provider), {
        value: {
          insertCss: insertCss
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
        store: store
      }))), {
        onShellReady: function onShellReady() {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html;charset=utf8');
          var styles = '';

          if (css.size > 0) {
            styles = "\n<style>".concat(_toConsumableArray(css).join(''), "</style>");
          }

          res.write("\n                  <!DOCTYPE html>\n                  <html lang=\"en\">\n                  <head>\n                    <meta charset=\"UTF-8\">\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    ".concat(helmet.title.toString(), "\n                    ").concat(helmet.meta.toString(), "\n                    ").concat(styles, "\n                  </head>\n                  <body>\n                  <div id=\"root\">"));
          pipe(res);
          res.write("</div>\n                <script>\n                  window.context = {state:".concat(JSON.stringify(store.getState()), "}\n                </script>\n                <script defer async=\"true\" src=\"/client.js\"></script>\n              </body>\n              </html>\n            "));
        }
      }),
          pipe = _renderToPipeableStre.pipe;
    });
  } else {
    res.sendStatus(404);
  }
});
app.listen(3000, function () {
  return console.log('server started on port 3000');
});
})();

/******/ })()
;