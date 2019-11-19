/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/start-webapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"./node_modules/helmet/index.js\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/api */ \"./routes/api.js\");\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/config */ \"./core/config.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst cwd = process.cwd(); // view engine setup\n\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_3___default.a.join(cwd, \"views\"));\napp.set(\"view engine\", \"pug\");\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\n true && app.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use('/api/posts/save', express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _core_config__WEBPACK_IMPORTED_MODULE_9__[\"session\"].secret\n}));\napp.use(\"/assets\", express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(cwd, \"assets\")));\napp.use(\"/api\", _routes_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(cwd, \"frontend\")));\napp.get(\"*\", (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(cwd, \"frontend/index.html\"));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get(\"env\") === \"development\" ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render(\"error\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/start-webapp.js":
/*!*****************************!*\
  !*** ./bin/start-webapp.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ \"cluster\");\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/config */ \"./core/config.js\");\n\n\n\n\n\n\n\nlet debug;\nlet port;\nlet sslPort;\nlet httpServer;\nlet httpsServer;\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isMaster) {\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.on(\"exit\", function (worker, code, signal) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  });\n}\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isWorker) {\n  debug = new debug__WEBPACK_IMPORTED_MODULE_1___default.a(\"express:server\");\n  port = normalizePort(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].port);\n  sslPort = normalizePort(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslPort);\n  _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"port\", port);\n  httpServer = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpServer.listen(port);\n  httpServer.on(\"error\", onError);\n  httpServer.on(\"listening\", onListening);\n  const credentials = {\n    key: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslKey),\n    cert: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCert),\n    ca: [fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCA)],\n    passphrase: \"abc123\"\n  };\n  httpsServer = https__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(credentials, _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpsServer.listen(sslPort);\n  httpsServer.on(\"error\", onError);\n  httpsServer.on(\"listening\", onSslListening);\n}\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== \"listen\") {\n    throw error;\n  }\n\n  const bind = typeof port === \"string\" ? \"Pipe \" + port : \"Port \" + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case \"EACCES\":\n      console.error(bind + \" requires elevated privileges\");\n      process.exit(1);\n      break;\n\n    case \"EADDRINUSE\":\n      console.error(bind + \" is already in use\");\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  const addr = httpServer.address();\n  const bind = typeof addr === \"string\" ? \"pipe \" + addr : \"port \" + addr.port;\n  debug(\"Listening on \" + bind);\n  console.log(\"Listening on \" + bind);\n}\n\nfunction onSslListening() {\n  const addr = httpsServer.address();\n  const bind = typeof addr === \"string\" ? \"pipe \" + addr : \"port \" + addr.port;\n  debug(\"Listening on \" + bind);\n  console.log(\"Listening on \" + bind);\n}\n\n//# sourceURL=webpack:///./bin/start-webapp.js?");

/***/ }),

/***/ "./core/config.js":
/*!************************!*\
  !*** ./core/config.js ***!
  \************************/
/*! exports provided: server, mysql, session, dbTblName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"session\", function() { return session; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbTblName\", function() { return dbTblName; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst server = {\n  isDev: false,\n  port: process.env.HTTP_PORT,\n  sslPort: process.env.HTTPS_PORT,\n  baseUrl: process.env.BASE_URL,\n  name: \"hrgulf.org\",\n  description: \"Portal in hrgulf.org\",\n  author: \"Zhenlong J.\",\n  secret: \"hrgulf@@\",\n  sslKey: \"./sslcert/server.key\",\n  sslCert: \"./sslcert/1e720c418ffe9875.crt\",\n  sslCA: \"./sslcert/gd_bundle-g2-g1.crt\",\n  environment: \"development\"\n};\nconst mysql = {\n  connectionLimit: 10,\n  host: process.env.MYSQL_HOST,\n  port: process.env.MYSQL_PORT,\n  user: process.env.MYSQL_USER,\n  password: process.env.MYSQL_PASSWORD,\n  database: process.env.MYSQL_DATABASE\n};\nconst session = {\n  name: \"hrgulf.org\",\n  key: \"hrgulf.org\",\n  secret: \"hrgulf.org@@\",\n  secretAdmin: \"hrgulf.org_admin@@\"\n};\nconst dbTblName = {\n  users: \"users\",\n  posts: \"posts\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server,\n  mysql,\n  session,\n  dbTblName\n});\n\n//# sourceURL=webpack:///./core/config.js?");

/***/ }),

/***/ "./core/consts.js":
/*!************************!*\
  !*** ./core/consts.js ***!
  \************************/
/*! exports provided: uploadPath, success, error, lang, defaultPageSize, defaultLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadPath\", function() { return uploadPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lang\", function() { return lang; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultPageSize\", function() { return defaultPageSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLanguage\", function() { return defaultLanguage; });\nconst uploadPath = {\n  mediaSlider: \"/uploads/media-slider\"\n};\nconst success = \"success\";\nconst error = \"error\";\nconst lang = \"lang\";\nconst defaultPageSize = 10;\nconst defaultLanguage = 'en';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  uploadPath,\n  success,\n  error,\n  lang,\n  defaultPageSize,\n  defaultLanguage\n});\n\n//# sourceURL=webpack:///./core/consts.js?");

/***/ }),

/***/ "./core/db.js":
/*!********************!*\
  !*** ./core/db.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dbConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbConn */ \"./core/dbConn.js\");\n\nconst db = {};\n\ndb.query = (q, data) => {\n  return new Promise((resolve, reject) => {\n    _dbConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q, data, (err, res) => {\n      err ? reject(err) : resolve(res);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n//# sourceURL=webpack:///./core/db.js?");

/***/ }),

/***/ "./core/dbConn.js":
/*!************************!*\
  !*** ./core/dbConn.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mysql2__WEBPACK_IMPORTED_MODULE_0___default.a.createPool(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysql));\n\n//# sourceURL=webpack:///./core/dbConn.js?");

/***/ }),

/***/ "./core/i18n/ar.js":
/*!*************************!*\
  !*** ./core/i18n/ar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: \"success\",\n  error: \"danger\",\n  unknownServerError: \"خطأ غير معروف في الخادم\",\n  emailAlreadyRegistered: \"عنوان البريد الإلكترونى هذا مسجل بالفعل.\",\n  usernameAlreadyRegistered: \"وسجلت بالفعل اسم المستخدم هذا.\",\n  // successfullyRegistered: \"Successfully registered. Please activate your account by validation email.\",\n  successfullyRegistered: \"سجلت بنجاح. يرجى محاولة تسجيل الدخول.\",\n  emailIsIncorrect: \"البريد الالكتروني غير صحيح.\",\n  emailIsNotRegistered: \"البريد الإلكتروني غير مسجل\",\n  usernameIsIncorrect: \"اسم المستخدم غير صحيح\",\n  passwordIsIncorrect: \"كلمة المرور غير صحيحة\",\n  yourAccountIsNotAllowed: \"حسابك غير مسموح به. يرجى الاتصال المشرف.\",\n  successfullySignedIn: \"تم تسجيل الدخول بنجاح\",\n  successfullySignedOut: \"تم تسجيل الخروج بنجاح\",\n  error404: \"لم يتم العثور على\",\n  error500: \"خطأ غير معروف في الخادم\",\n  successfullySaved: \"حفظ بنجاح\",\n  successfullyAdded: \"أضيف بنجاح\",\n  successfullyEdited: \"تم التعديل بنجاح\",\n  successfullyChanged: \"تغيرت بنجاح\",\n  successfullyDeleted: \"تم الحذف بنجاح\",\n  successfullyReset: \"إعادة تعيين بنجاح\",\n  currentPasswordIncorrect: \"كلمة المرور الحالية غير صحيحة.\",\n  failedDueToUnknownServerError: \"فشل بسبب خطأ غير معروف في الخادم\",\n  invalidParameters: \"معلمات غير صالحة\",\n  notUploaded: \"لم يتم الرفع\",\n  notFound: \"لم يتم العثور على\",\n  successfullyUploaded: \"تم الرفع بنجاح\",\n  successfullyPosted: \"تم النشر بنجاح\",\n  successfullyJoined: \"تم التسجيل بنجاح\",\n  youHaveAlreadyJoined: \"لقد انضممت بالفعل\",\n  successfullySent: \"أرسلت بنجاح\",\n  invalidHash: \"توقيعك غير صالح.\",\n  invalidUser: \"معلوماتك غير صالحة.\",\n  notRegistered: \"انت لم تسجل.\"\n});\n\n//# sourceURL=webpack:///./core/i18n/ar.js?");

/***/ }),

/***/ "./core/i18n/en.js":
/*!*************************!*\
  !*** ./core/i18n/en.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: \"success\",\n  error: \"danger\",\n  unknownServerError: \"Unknown server error\",\n  emailAlreadyRegistered: \"This email is already registered.\",\n  usernameAlreadyRegistered: \"This username is already registered.\",\n  // successfullyRegistered: \"Successfully registered. Please activate your account by validation email.\",\n  successfullyRegistered: \"Successfully registered. Please try to sign in.\",\n  emailIsIncorrect: \"Email is incorrect.\",\n  emailIsNotRegistered: \"Email is not registered.\",\n  usernameIsIncorrect: \"Username is incorrect\",\n  passwordIsIncorrect: \"Password is incorrect\",\n  yourAccountIsNotAllowed: \"Your account is not allowed. Please contact admin.\",\n  successfullySignedIn: \"Successfully signed in\",\n  successfullySignedOut: \"Successfully signed out\",\n  error404: \"Not Fount\",\n  error500: \"Unknown server error\",\n  successfullySaved: \"Successfully saved\",\n  successfullyAdded: \"Successfully added\",\n  successfullyEdited: \"Successfully edited\",\n  successfullyChanged: \"Successfully changed\",\n  successfullyDeleted: \"Successfully Deleted\",\n  successfullyReset: \"Successfully Reset\",\n  currentPasswordIncorrect: \"Current password is incorrect.\",\n  failedDueToUnknownServerError: \"Failed due to unknown server error\",\n  invalidParameters: \"Invalid Parameters\",\n  notUploaded: \"Not uploaded\",\n  notFound: \"Not Found\",\n  successfullyUploaded: \"Successfully uploaded\",\n  successfullyPosted: \"Successfully posted\",\n  successfullyJoined: \"Successfully joined\",\n  youHaveAlreadyJoined: \"You have already joined.\",\n  successfullySent: \"Successfully sent\",\n  invalidHash: \"Your signature is invalid.\",\n  invalidUser: \"Your information is invalid.\",\n  notRegistered: \"You are not registered.\"\n});\n\n//# sourceURL=webpack:///./core/i18n/en.js?");

/***/ }),

/***/ "./core/myCrypto.js":
/*!**************************!*\
  !*** ./core/myCrypto.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hmacHex: plain => {\n    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac(\"sha256\", _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].server.secret).update(plain).digest(\"hex\"); // console.log(\"signMessage\", plain, cipher);\n\n    return cipher;\n  }\n});\n\n//# sourceURL=webpack:///./core/myCrypto.js?");

/***/ }),

/***/ "./core/strings.js":
/*!*************************!*\
  !*** ./core/strings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ \"./core/i18n/en.js\");\n/* harmony import */ var _i18n_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/ar */ \"./core/i18n/ar.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  en: _i18n_en__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ar: _i18n_ar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./core/strings.js?");

/***/ }),

/***/ "./core/tracer.js":
/*!************************!*\
  !*** ./core/tracer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tracer */ \"tracer\");\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tracer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tracer__WEBPACK_IMPORTED_MODULE_0___default.a.colorConsole({\n  format: [\"{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}\", {\n    error: \"{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}\\nCall Stack:\\n{{stack}}\" // error format\n\n  }],\n  dateformat: \"HH:MM:ss.L\",\n  preprocess: data => {\n    data.title = data.title.toUpperCase();\n  }\n}));\n\n//# sourceURL=webpack:///./core/tracer.js?");

/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/bowser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser.js */ \"./node_modules/bowser/src/parser.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/bowser/src/constants.js\");\n/*!\n * Bowser - a browser detector\n * https://github.com/lancedikson/bowser\n * MIT License | (c) Dustin Diaz 2012-2015\n * MIT License | (c) Denis Demchenko 2015-2019\n */\n\n\n\n/**\n * Bowser class.\n * Keep it simple as much as it can be.\n * It's supposed to work with collections of {@link Parser} instances\n * rather then solve one-instance problems.\n * All the one-instance stuff is located in Parser class.\n *\n * @class\n * @classdesc Bowser is a static object, that provides an API to the Parsers\n * @hideconstructor\n */\nclass Bowser {\n  /**\n   * Creates a {@link Parser} instance\n   *\n   * @param {String} UA UserAgent string\n   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it\n   * explicitly. Same as `skipParsing` for {@link Parser}.\n   * @returns {Parser}\n   * @throws {Error} when UA is not a String\n   *\n   * @example\n   * const parser = Bowser.getParser(window.navigator.userAgent);\n   * const result = parser.getResult();\n   */\n  static getParser(UA, skipParsing = false) {\n    if (typeof UA !== 'string') {\n      throw new Error('UserAgent should be a string');\n    }\n    return new _parser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](UA, skipParsing);\n  }\n\n  /**\n   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately\n   *\n   * @param UA\n   * @return {ParsedResult}\n   *\n   * @example\n   * const result = Bowser.parse(window.navigator.userAgent);\n   */\n  static parse(UA) {\n    return (new _parser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](UA)).getResult();\n  }\n\n  static get BROWSER_MAP() {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"BROWSER_MAP\"];\n  }\n\n  static get ENGINE_MAP() {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"];\n  }\n\n  static get OS_MAP() {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"];\n  }\n\n  static get PLATFORMS_MAP() {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bowser);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/bowser.js?");

/***/ }),

/***/ "./node_modules/bowser/src/constants.js":
/*!**********************************************!*\
  !*** ./node_modules/bowser/src/constants.js ***!
  \**********************************************/
/*! exports provided: BROWSER_ALIASES_MAP, BROWSER_MAP, PLATFORMS_MAP, OS_MAP, ENGINE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BROWSER_ALIASES_MAP\", function() { return BROWSER_ALIASES_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BROWSER_MAP\", function() { return BROWSER_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLATFORMS_MAP\", function() { return PLATFORMS_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OS_MAP\", function() { return OS_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENGINE_MAP\", function() { return ENGINE_MAP; });\n// NOTE: this list must be up-to-date with browsers listed in\n// test/acceptance/useragentstrings.yml\nconst BROWSER_ALIASES_MAP = {\n  'Amazon Silk': 'amazon_silk',\n  'Android Browser': 'android',\n  Bada: 'bada',\n  BlackBerry: 'blackberry',\n  Chrome: 'chrome',\n  Chromium: 'chromium',\n  Epiphany: 'epiphany',\n  Firefox: 'firefox',\n  Focus: 'focus',\n  Generic: 'generic',\n  'Google Search': 'google_search',\n  Googlebot: 'googlebot',\n  'Internet Explorer': 'ie',\n  'K-Meleon': 'k_meleon',\n  Maxthon: 'maxthon',\n  'Microsoft Edge': 'edge',\n  'MZ Browser': 'mz',\n  'NAVER Whale Browser': 'naver',\n  Opera: 'opera',\n  'Opera Coast': 'opera_coast',\n  PhantomJS: 'phantomjs',\n  Puffin: 'puffin',\n  QupZilla: 'qupzilla',\n  QQ: 'qq',\n  QQLite: 'qqlite',\n  Safari: 'safari',\n  Sailfish: 'sailfish',\n  'Samsung Internet for Android': 'samsung_internet',\n  SeaMonkey: 'seamonkey',\n  Sleipnir: 'sleipnir',\n  Swing: 'swing',\n  Tizen: 'tizen',\n  'UC Browser': 'uc',\n  Vivaldi: 'vivaldi',\n  'WebOS Browser': 'webos',\n  WeChat: 'wechat',\n  'Yandex Browser': 'yandex',\n  Roku: 'roku',\n};\n\nconst BROWSER_MAP = {\n  amazon_silk: 'Amazon Silk',\n  android: 'Android Browser',\n  bada: 'Bada',\n  blackberry: 'BlackBerry',\n  chrome: 'Chrome',\n  chromium: 'Chromium',\n  epiphany: 'Epiphany',\n  firefox: 'Firefox',\n  focus: 'Focus',\n  generic: 'Generic',\n  googlebot: 'Googlebot',\n  google_search: 'Google Search',\n  ie: 'Internet Explorer',\n  k_meleon: 'K-Meleon',\n  maxthon: 'Maxthon',\n  edge: 'Microsoft Edge',\n  mz: 'MZ Browser',\n  naver: 'NAVER Whale Browser',\n  opera: 'Opera',\n  opera_coast: 'Opera Coast',\n  phantomjs: 'PhantomJS',\n  puffin: 'Puffin',\n  qupzilla: 'QupZilla',\n  qq: 'QQ Browser',\n  qqlite: 'QQ Browser Lite',\n  safari: 'Safari',\n  sailfish: 'Sailfish',\n  samsung_internet: 'Samsung Internet for Android',\n  seamonkey: 'SeaMonkey',\n  sleipnir: 'Sleipnir',\n  swing: 'Swing',\n  tizen: 'Tizen',\n  uc: 'UC Browser',\n  vivaldi: 'Vivaldi',\n  webos: 'WebOS Browser',\n  wechat: 'WeChat',\n  yandex: 'Yandex Browser',\n};\n\nconst PLATFORMS_MAP = {\n  tablet: 'tablet',\n  mobile: 'mobile',\n  desktop: 'desktop',\n  tv: 'tv',\n};\n\nconst OS_MAP = {\n  WindowsPhone: 'Windows Phone',\n  Windows: 'Windows',\n  MacOS: 'macOS',\n  iOS: 'iOS',\n  Android: 'Android',\n  WebOS: 'WebOS',\n  BlackBerry: 'BlackBerry',\n  Bada: 'Bada',\n  Tizen: 'Tizen',\n  Linux: 'Linux',\n  ChromeOS: 'Chrome OS',\n  PlayStation4: 'PlayStation 4',\n  Roku: 'Roku',\n};\n\nconst ENGINE_MAP = {\n  EdgeHTML: 'EdgeHTML',\n  Blink: 'Blink',\n  Trident: 'Trident',\n  Presto: 'Presto',\n  Gecko: 'Gecko',\n  WebKit: 'WebKit',\n};\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/constants.js?");

/***/ }),

/***/ "./node_modules/bowser/src/parser-browsers.js":
/*!****************************************************!*\
  !*** ./node_modules/bowser/src/parser-browsers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./node_modules/bowser/src/utils.js\");\n/**\n * Browsers' descriptors\n *\n * The idea of descriptors is simple. You should know about them two simple things:\n * 1. Every descriptor has a method or property called `test` and a `describe` method.\n * 2. Order of descriptors is important.\n *\n * More details:\n * 1. Method or property `test` serves as a way to detect whether the UA string\n * matches some certain browser or not. The `describe` method helps to make a result\n * object with params that show some browser-specific things: name, version, etc.\n * 2. Order of descriptors is important because a Parser goes through them one by one\n * in course. For example, if you insert Chrome's descriptor as the first one,\n * more then a half of browsers will be described as Chrome, because they will pass\n * the Chrome descriptor's test.\n *\n * Descriptor's `test` could be a property with an array of RegExps, where every RegExp\n * will be applied to a UA string to test it whether it matches or not.\n * If a descriptor has two or more regexps in the `test` array it tests them one by one\n * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.\n *\n * Or `test` could be a method. In that case it gets a Parser instance and should\n * return true/false to get the Parser know if this browser descriptor matches the UA or not.\n */\n\n\n\nconst commonVersionIdentifier = /version\\/(\\d+(\\.?_?\\d+)+)/i;\n\nconst browsersList = [\n  /* Googlebot */\n  {\n    test: [/googlebot/i],\n    describe(ua) {\n      const browser = {\n        name: 'Googlebot',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/googlebot\\/(\\d+(\\.\\d+))/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* Opera < 13.0 */\n  {\n    test: [/opera/i],\n    describe(ua) {\n      const browser = {\n        name: 'Opera',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:opera)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* Opera > 13.0 */\n  {\n    test: [/opr\\/|opios/i],\n    describe(ua) {\n      const browser = {\n        name: 'Opera',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:opr|opios)[\\s/](\\S+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/SamsungBrowser/i],\n    describe(ua) {\n      const browser = {\n        name: 'Samsung Internet for Android',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:SamsungBrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/Whale/i],\n    describe(ua) {\n      const browser = {\n        name: 'NAVER Whale Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:whale)[\\s/](\\d+(?:\\.\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/MZBrowser/i],\n    describe(ua) {\n      const browser = {\n        name: 'MZ Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:MZBrowser)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/focus/i],\n    describe(ua) {\n      const browser = {\n        name: 'Focus',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:focus)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/swing/i],\n    describe(ua) {\n      const browser = {\n        name: 'Swing',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:swing)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/coast/i],\n    describe(ua) {\n      const browser = {\n        name: 'Opera Coast',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:coast)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/yabrowser/i],\n    describe(ua) {\n      const browser = {\n        name: 'Yandex Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:yabrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/ucbrowser/i],\n    describe(ua) {\n      const browser = {\n        name: 'UC Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:ucbrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/Maxthon|mxios/i],\n    describe(ua) {\n      const browser = {\n        name: 'Maxthon',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:Maxthon|mxios)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/epiphany/i],\n    describe(ua) {\n      const browser = {\n        name: 'Epiphany',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:epiphany)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/puffin/i],\n    describe(ua) {\n      const browser = {\n        name: 'Puffin',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:puffin)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/sleipnir/i],\n    describe(ua) {\n      const browser = {\n        name: 'Sleipnir',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:sleipnir)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/k-meleon/i],\n    describe(ua) {\n      const browser = {\n        name: 'K-Meleon',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:k-meleon)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/micromessenger/i],\n    describe(ua) {\n      const browser = {\n        name: 'WeChat',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:micromessenger)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/qqbrowser/i],\n    describe(ua) {\n      const browser = {\n        name: (/qqbrowserlite/i).test(ua) ? 'QQ Browser Lite' : 'QQ Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/msie|trident/i],\n    describe(ua) {\n      const browser = {\n        name: 'Internet Explorer',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:msie |rv:)(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/\\sedg\\//i],\n    describe(ua) {\n      const browser = {\n        name: 'Microsoft Edge',\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/\\sedg\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/edg([ea]|ios)/i],\n    describe(ua) {\n      const browser = {\n        name: 'Microsoft Edge',\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSecondMatch(/edg([ea]|ios)\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/vivaldi/i],\n    describe(ua) {\n      const browser = {\n        name: 'Vivaldi',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/vivaldi\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/seamonkey/i],\n    describe(ua) {\n      const browser = {\n        name: 'SeaMonkey',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/seamonkey\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/sailfish/i],\n    describe(ua) {\n      const browser = {\n        name: 'Sailfish',\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/sailfish\\s?browser\\/(\\d+(\\.\\d+)?)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/silk/i],\n    describe(ua) {\n      const browser = {\n        name: 'Amazon Silk',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/silk\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/phantom/i],\n    describe(ua) {\n      const browser = {\n        name: 'PhantomJS',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/phantomjs\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/slimerjs/i],\n    describe(ua) {\n      const browser = {\n        name: 'SlimerJS',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/slimerjs\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/blackberry|\\bbb\\d+/i, /rim\\stablet/i],\n    describe(ua) {\n      const browser = {\n        name: 'BlackBerry',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/blackberry[\\d]+\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/(web|hpw)[o0]s/i],\n    describe(ua) {\n      const browser = {\n        name: 'WebOS Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/w(?:eb)?[o0]sbrowser\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/bada/i],\n    describe(ua) {\n      const browser = {\n        name: 'Bada',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/dolfin\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/tizen/i],\n    describe(ua) {\n      const browser = {\n        name: 'Tizen',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:tizen\\s?)?browser\\/(\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/qupzilla/i],\n    describe(ua) {\n      const browser = {\n        name: 'QupZilla',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:qupzilla)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/firefox|iceweasel|fxios/i],\n    describe(ua) {\n      const browser = {\n        name: 'Firefox',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:firefox|iceweasel|fxios)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/chromium/i],\n    describe(ua) {\n      const browser = {\n        name: 'Chromium',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:chromium)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/chrome|crios|crmo/i],\n    describe(ua) {\n      const browser = {\n        name: 'Chrome',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:chrome|crios|crmo)\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n  {\n    test: [/GSA/i],\n    describe(ua) {\n      const browser = {\n        name: 'Google Search',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:GSA)\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* Android Browser */\n  {\n    test(parser) {\n      const notLikeAndroid = !parser.test(/like android/i);\n      const butAndroid = parser.test(/android/i);\n      return notLikeAndroid && butAndroid;\n    },\n    describe(ua) {\n      const browser = {\n        name: 'Android Browser',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* PlayStation 4 */\n  {\n    test: [/playstation 4/i],\n    describe(ua) {\n      const browser = {\n        name: 'PlayStation 4',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* Safari */\n  {\n    test: [/safari|applewebkit/i],\n    describe(ua) {\n      const browser = {\n        name: 'Safari',\n      };\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(commonVersionIdentifier, ua);\n\n      if (version) {\n        browser.version = version;\n      }\n\n      return browser;\n    },\n  },\n\n  /* Something else */\n  {\n    test: [/.*/i],\n    describe(ua) {\n      /* Here we try to make sure that there are explicit details about the device\n       * in order to decide what regexp exactly we want to apply\n       * (as there is a specific decision based on that conclusion)\n       */\n      const regexpWithoutDeviceSpec = /^(.*)\\/(.*) /;\n      const regexpWithDeviceSpec = /^(.*)\\/(.*)[ \\t]\\((.*)/;\n      const hasDeviceSpec = ua.search('\\\\(') !== -1;\n      const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;\n      return {\n        name: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(regexp, ua),\n        version: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSecondMatch(regexp, ua),\n      };\n    },\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (browsersList);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/parser-browsers.js?");

/***/ }),

/***/ "./node_modules/bowser/src/parser-engines.js":
/*!***************************************************!*\
  !*** ./node_modules/bowser/src/parser-engines.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./node_modules/bowser/src/utils.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/bowser/src/constants.js\");\n\n\n\n/*\n * More specific goes first\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  /* EdgeHTML */\n  {\n    test(parser) {\n      return parser.getBrowserName(true) === 'microsoft edge';\n    },\n    describe(ua) {\n      const isBlinkBased = /\\sedg\\//i.test(ua);\n\n      // return blink if it's blink-based one\n      if (isBlinkBased) {\n        return {\n          name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].Blink,\n        };\n      }\n\n      // otherwise match the version and return EdgeHTML\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/edge\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].EdgeHTML,\n        version,\n      };\n    },\n  },\n\n  /* Trident */\n  {\n    test: [/trident/i],\n    describe(ua) {\n      const engine = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].Trident,\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/trident\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        engine.version = version;\n      }\n\n      return engine;\n    },\n  },\n\n  /* Presto */\n  {\n    test(parser) {\n      return parser.test(/presto/i);\n    },\n    describe(ua) {\n      const engine = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].Presto,\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/presto\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        engine.version = version;\n      }\n\n      return engine;\n    },\n  },\n\n  /* Gecko */\n  {\n    test(parser) {\n      const isGecko = parser.test(/gecko/i);\n      const likeGecko = parser.test(/like gecko/i);\n      return isGecko && !likeGecko;\n    },\n    describe(ua) {\n      const engine = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].Gecko,\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/gecko\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        engine.version = version;\n      }\n\n      return engine;\n    },\n  },\n\n  /* Blink */\n  {\n    test: [/(apple)?webkit\\/537\\.36/i],\n    describe() {\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].Blink,\n      };\n    },\n  },\n\n  /* WebKit */\n  {\n    test: [/(apple)?webkit/i],\n    describe(ua) {\n      const engine = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"ENGINE_MAP\"].WebKit,\n      };\n\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/webkit\\/(\\d+(\\.?_?\\d+)+)/i, ua);\n\n      if (version) {\n        engine.version = version;\n      }\n\n      return engine;\n    },\n  },\n]);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/parser-engines.js?");

/***/ }),

/***/ "./node_modules/bowser/src/parser-os.js":
/*!**********************************************!*\
  !*** ./node_modules/bowser/src/parser-os.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./node_modules/bowser/src/utils.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/bowser/src/constants.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  /* Roku */\n  {\n    test: [/Roku\\/DVP/],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/Roku\\/DVP-(\\d+\\.\\d+)/i, ua);\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Roku,\n        version,\n      };\n    },\n  },\n\n  /* Windows Phone */\n  {\n    test: [/windows phone/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/windows phone (?:os)?\\s?(\\d+(\\.\\d+)*)/i, ua);\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].WindowsPhone,\n        version,\n      };\n    },\n  },\n\n  /* Windows */\n  {\n    test: [/windows/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/Windows ((NT|XP)( \\d\\d?.\\d)?)/i, ua);\n      const versionName = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWindowsVersionName(version);\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Windows,\n        version,\n        versionName,\n      };\n    },\n  },\n\n  /* macOS */\n  {\n    test: [/macintosh/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/mac os x (\\d+(\\.?_?\\d+)+)/i, ua).replace(/[_\\s]/g, '.');\n      const versionName = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMacOSVersionName(version);\n\n      const os = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].MacOS,\n        version,\n      };\n      if (versionName) {\n        os.versionName = versionName;\n      }\n      return os;\n    },\n  },\n\n  /* iOS */\n  {\n    test: [/(ipod|iphone|ipad)/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/os (\\d+([_\\s]\\d+)*) like mac os x/i, ua).replace(/[_\\s]/g, '.');\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].iOS,\n        version,\n      };\n    },\n  },\n\n  /* Android */\n  {\n    test(parser) {\n      const notLikeAndroid = !parser.test(/like android/i);\n      const butAndroid = parser.test(/android/i);\n      return notLikeAndroid && butAndroid;\n    },\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/android[\\s/-](\\d+(\\.\\d+)*)/i, ua);\n      const versionName = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAndroidVersionName(version);\n      const os = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Android,\n        version,\n      };\n      if (versionName) {\n        os.versionName = versionName;\n      }\n      return os;\n    },\n  },\n\n  /* WebOS */\n  {\n    test: [/(web|hpw)[o0]s/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(?:web|hpw)[o0]s\\/(\\d+(\\.\\d+)*)/i, ua);\n      const os = {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].WebOS,\n      };\n\n      if (version && version.length) {\n        os.version = version;\n      }\n      return os;\n    },\n  },\n\n  /* BlackBerry */\n  {\n    test: [/blackberry|\\bbb\\d+/i, /rim\\stablet/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/rim\\stablet\\sos\\s(\\d+(\\.\\d+)*)/i, ua)\n        || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/blackberry\\d+\\/(\\d+([_\\s]\\d+)*)/i, ua)\n        || _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/\\bbb(\\d+)/i, ua);\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].BlackBerry,\n        version,\n      };\n    },\n  },\n\n  /* Bada */\n  {\n    test: [/bada/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/bada\\/(\\d+(\\.\\d+)*)/i, ua);\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Bada,\n        version,\n      };\n    },\n  },\n\n  /* Tizen */\n  {\n    test: [/tizen/i],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/tizen[/\\s](\\d+(\\.\\d+)*)/i, ua);\n\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Tizen,\n        version,\n      };\n    },\n  },\n\n  /* Linux */\n  {\n    test: [/linux/i],\n    describe() {\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].Linux,\n      };\n    },\n  },\n\n  /* Chrome OS */\n  {\n    test: [/CrOS/],\n    describe() {\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].ChromeOS,\n      };\n    },\n  },\n\n  /* Playstation 4 */\n  {\n    test: [/PlayStation 4/],\n    describe(ua) {\n      const version = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/PlayStation 4[/\\s](\\d+(\\.\\d+)*)/i, ua);\n      return {\n        name: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OS_MAP\"].PlayStation4,\n        version,\n      };\n    },\n  },\n]);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/parser-os.js?");

/***/ }),

/***/ "./node_modules/bowser/src/parser-platforms.js":
/*!*****************************************************!*\
  !*** ./node_modules/bowser/src/parser-platforms.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./node_modules/bowser/src/utils.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/bowser/src/constants.js\");\n\n\n\n/*\n * Tablets go first since usually they have more specific\n * signs to detect.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  /* Googlebot */\n  {\n    test: [/googlebot/i],\n    describe() {\n      return {\n        type: 'bot',\n        vendor: 'Google',\n      };\n    },\n  },\n\n  /* Huawei */\n  {\n    test: [/huawei/i],\n    describe(ua) {\n      const model = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(can-l01)/i, ua) && 'Nova';\n      const platform = {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n        vendor: 'Huawei',\n      };\n      if (model) {\n        platform.model = model;\n      }\n      return platform;\n    },\n  },\n\n  /* Nexus Tablet */\n  {\n    test: [/nexus\\s*(?:7|8|9|10).*/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n        vendor: 'Nexus',\n      };\n    },\n  },\n\n  /* iPad */\n  {\n    test: [/ipad/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n        vendor: 'Apple',\n        model: 'iPad',\n      };\n    },\n  },\n\n  /* Amazon Kindle Fire */\n  {\n    test: [/kftt build/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n        vendor: 'Amazon',\n        model: 'Kindle Fire HD 7',\n      };\n    },\n  },\n\n  /* Another Amazon Tablet with Silk */\n  {\n    test: [/silk/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n        vendor: 'Amazon',\n      };\n    },\n  },\n\n  /* Tablet */\n  {\n    test: [/tablet(?! pc)/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n      };\n    },\n  },\n\n  /* iPod/iPhone */\n  {\n    test(parser) {\n      const iDevice = parser.test(/ipod|iphone/i);\n      const likeIDevice = parser.test(/like (ipod|iphone)/i);\n      return iDevice && !likeIDevice;\n    },\n    describe(ua) {\n      const model = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstMatch(/(ipod|iphone)/i, ua);\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n        vendor: 'Apple',\n        model,\n      };\n    },\n  },\n\n  /* Nexus Mobile */\n  {\n    test: [/nexus\\s*[0-6].*/i, /galaxy nexus/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n        vendor: 'Nexus',\n      };\n    },\n  },\n\n  /* Mobile */\n  {\n    test: [/[^-]mobi/i],\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n      };\n    },\n  },\n\n  /* BlackBerry */\n  {\n    test(parser) {\n      return parser.getBrowserName(true) === 'blackberry';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n        vendor: 'BlackBerry',\n      };\n    },\n  },\n\n  /* Bada */\n  {\n    test(parser) {\n      return parser.getBrowserName(true) === 'bada';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n      };\n    },\n  },\n\n  /* Windows Phone */\n  {\n    test(parser) {\n      return parser.getBrowserName() === 'windows phone';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n        vendor: 'Microsoft',\n      };\n    },\n  },\n\n  /* Android Tablet */\n  {\n    test(parser) {\n      const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);\n      return parser.getOSName(true) === 'android' && (osMajorVersion >= 3);\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tablet,\n      };\n    },\n  },\n\n  /* Android Mobile */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'android';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].mobile,\n      };\n    },\n  },\n\n  /* desktop */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'macos';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].desktop,\n        vendor: 'Apple',\n      };\n    },\n  },\n\n  /* Windows */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'windows';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].desktop,\n      };\n    },\n  },\n\n  /* Linux */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'linux';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].desktop,\n      };\n    },\n  },\n\n  /* PlayStation 4 */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'playstation 4';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tv,\n      };\n    },\n  },\n\n  /* Roku */\n  {\n    test(parser) {\n      return parser.getOSName(true) === 'roku';\n    },\n    describe() {\n      return {\n        type: _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"PLATFORMS_MAP\"].tv,\n      };\n    },\n  },\n]);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/parser-platforms.js?");

/***/ }),

/***/ "./node_modules/bowser/src/parser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/parser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parser_browsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-browsers.js */ \"./node_modules/bowser/src/parser-browsers.js\");\n/* harmony import */ var _parser_os_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-os.js */ \"./node_modules/bowser/src/parser-os.js\");\n/* harmony import */ var _parser_platforms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser-platforms.js */ \"./node_modules/bowser/src/parser-platforms.js\");\n/* harmony import */ var _parser_engines_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser-engines.js */ \"./node_modules/bowser/src/parser-engines.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./node_modules/bowser/src/utils.js\");\n\n\n\n\n\n\n/**\n * The main class that arranges the whole parsing process.\n */\nclass Parser {\n  /**\n   * Create instance of Parser\n   *\n   * @param {String} UA User-Agent string\n   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance\n   * improvements if you need to make a more particular parsing\n   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}\n   *\n   * @throw {Error} in case of empty UA String\n   *\n   * @constructor\n   */\n  constructor(UA, skipParsing = false) {\n    if (UA === void (0) || UA === null || UA === '') {\n      throw new Error(\"UserAgent parameter can't be empty\");\n    }\n\n    this._ua = UA;\n\n    /**\n     * @typedef ParsedResult\n     * @property {Object} browser\n     * @property {String|undefined} [browser.name]\n     * Browser name, like `\"Chrome\"` or `\"Internet Explorer\"`\n     * @property {String|undefined} [browser.version] Browser version as a String `\"12.01.45334.10\"`\n     * @property {Object} os\n     * @property {String|undefined} [os.name] OS name, like `\"Windows\"` or `\"macOS\"`\n     * @property {String|undefined} [os.version] OS version, like `\"NT 5.1\"` or `\"10.11.1\"`\n     * @property {String|undefined} [os.versionName] OS name, like `\"XP\"` or `\"High Sierra\"`\n     * @property {Object} platform\n     * @property {String|undefined} [platform.type]\n     * platform type, can be either `\"desktop\"`, `\"tablet\"` or `\"mobile\"`\n     * @property {String|undefined} [platform.vendor] Vendor of the device,\n     * like `\"Apple\"` or `\"Samsung\"`\n     * @property {String|undefined} [platform.model] Device model,\n     * like `\"iPhone\"` or `\"Kindle Fire HD 7\"`\n     * @property {Object} engine\n     * @property {String|undefined} [engine.name]\n     * Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`\n     * @property {String|undefined} [engine.version] String version of the engine\n     */\n    this.parsedResult = {};\n\n    if (skipParsing !== true) {\n      this.parse();\n    }\n  }\n\n  /**\n   * Get UserAgent string of current Parser instance\n   * @return {String} User-Agent String of the current <Parser> object\n   *\n   * @public\n   */\n  getUA() {\n    return this._ua;\n  }\n\n  /**\n   * Test a UA string for a regexp\n   * @param {RegExp} regex\n   * @return {Boolean}\n   */\n  test(regex) {\n    return regex.test(this._ua);\n  }\n\n  /**\n   * Get parsed browser object\n   * @return {Object}\n   */\n  parseBrowser() {\n    this.parsedResult.browser = {};\n\n    const browserDescriptor = _parser_browsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((_browser) => {\n      if (typeof _browser.test === 'function') {\n        return _browser.test(this);\n      }\n\n      if (_browser.test instanceof Array) {\n        return _browser.test.some(condition => this.test(condition));\n      }\n\n      throw new Error(\"Browser's test function is not valid\");\n    });\n\n    if (browserDescriptor) {\n      this.parsedResult.browser = browserDescriptor.describe(this.getUA());\n    }\n\n    return this.parsedResult.browser;\n  }\n\n  /**\n   * Get parsed browser object\n   * @return {Object}\n   *\n   * @public\n   */\n  getBrowser() {\n    if (this.parsedResult.browser) {\n      return this.parsedResult.browser;\n    }\n\n    return this.parseBrowser();\n  }\n\n  /**\n   * Get browser's name\n   * @return {String} Browser's name or an empty string\n   *\n   * @public\n   */\n  getBrowserName(toLowerCase) {\n    if (toLowerCase) {\n      return String(this.getBrowser().name).toLowerCase() || '';\n    }\n    return this.getBrowser().name || '';\n  }\n\n\n  /**\n   * Get browser's version\n   * @return {String} version of browser\n   *\n   * @public\n   */\n  getBrowserVersion() {\n    return this.getBrowser().version;\n  }\n\n  /**\n   * Get OS\n   * @return {Object}\n   *\n   * @example\n   * this.getOS();\n   * {\n   *   name: 'macOS',\n   *   version: '10.11.12'\n   * }\n   */\n  getOS() {\n    if (this.parsedResult.os) {\n      return this.parsedResult.os;\n    }\n\n    return this.parseOS();\n  }\n\n  /**\n   * Parse OS and save it to this.parsedResult.os\n   * @return {*|{}}\n   */\n  parseOS() {\n    this.parsedResult.os = {};\n\n    const os = _parser_os_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find((_os) => {\n      if (typeof _os.test === 'function') {\n        return _os.test(this);\n      }\n\n      if (_os.test instanceof Array) {\n        return _os.test.some(condition => this.test(condition));\n      }\n\n      throw new Error(\"Browser's test function is not valid\");\n    });\n\n    if (os) {\n      this.parsedResult.os = os.describe(this.getUA());\n    }\n\n    return this.parsedResult.os;\n  }\n\n  /**\n   * Get OS name\n   * @param {Boolean} [toLowerCase] return lower-cased value\n   * @return {String} name of the OS — macOS, Windows, Linux, etc.\n   */\n  getOSName(toLowerCase) {\n    const { name } = this.getOS();\n\n    if (toLowerCase) {\n      return String(name).toLowerCase() || '';\n    }\n\n    return name || '';\n  }\n\n  /**\n   * Get OS version\n   * @return {String} full version with dots ('10.11.12', '5.6', etc)\n   */\n  getOSVersion() {\n    return this.getOS().version;\n  }\n\n  /**\n   * Get parsed platform\n   * @return {{}}\n   */\n  getPlatform() {\n    if (this.parsedResult.platform) {\n      return this.parsedResult.platform;\n    }\n\n    return this.parsePlatform();\n  }\n\n  /**\n   * Get platform name\n   * @param {Boolean} [toLowerCase=false]\n   * @return {*}\n   */\n  getPlatformType(toLowerCase = false) {\n    const { type } = this.getPlatform();\n\n    if (toLowerCase) {\n      return String(type).toLowerCase() || '';\n    }\n\n    return type || '';\n  }\n\n  /**\n   * Get parsed platform\n   * @return {{}}\n   */\n  parsePlatform() {\n    this.parsedResult.platform = {};\n\n    const platform = _parser_platforms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((_platform) => {\n      if (typeof _platform.test === 'function') {\n        return _platform.test(this);\n      }\n\n      if (_platform.test instanceof Array) {\n        return _platform.test.some(condition => this.test(condition));\n      }\n\n      throw new Error(\"Browser's test function is not valid\");\n    });\n\n    if (platform) {\n      this.parsedResult.platform = platform.describe(this.getUA());\n    }\n\n    return this.parsedResult.platform;\n  }\n\n  /**\n   * Get parsed engine\n   * @return {{}}\n   */\n  getEngine() {\n    if (this.parsedResult.engine) {\n      return this.parsedResult.engine;\n    }\n\n    return this.parseEngine();\n  }\n\n  /**\n   * Get engines's name\n   * @return {String} Engines's name or an empty string\n   *\n   * @public\n   */\n  getEngineName(toLowerCase) {\n    if (toLowerCase) {\n      return String(this.getEngine().name).toLowerCase() || '';\n    }\n    return this.getEngine().name || '';\n  }\n\n  /**\n   * Get parsed platform\n   * @return {{}}\n   */\n  parseEngine() {\n    this.parsedResult.engine = {};\n\n    const engine = _parser_engines_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((_engine) => {\n      if (typeof _engine.test === 'function') {\n        return _engine.test(this);\n      }\n\n      if (_engine.test instanceof Array) {\n        return _engine.test.some(condition => this.test(condition));\n      }\n\n      throw new Error(\"Browser's test function is not valid\");\n    });\n\n    if (engine) {\n      this.parsedResult.engine = engine.describe(this.getUA());\n    }\n\n    return this.parsedResult.engine;\n  }\n\n  /**\n   * Parse full information about the browser\n   */\n  parse() {\n    this.parseBrowser();\n    this.parseOS();\n    this.parsePlatform();\n    this.parseEngine();\n\n    return this;\n  }\n\n  /**\n   * Get parsed result\n   * @return {ParsedResult}\n   */\n  getResult() {\n    return Object.assign({}, this.parsedResult);\n  }\n\n  /**\n   * Check if parsed browser matches certain conditions\n   *\n   * @param {Object} checkTree It's one or two layered object,\n   * which can include a platform or an OS on the first layer\n   * and should have browsers specs on the bottom-laying layer\n   *\n   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.\n   * Returns `undefined` when the browser is no described in the checkTree object.\n   *\n   * @example\n   * const browser = Bowser.getParser(window.navigator.userAgent);\n   * if (browser.satisfies({chrome: '>118.01.1322' }))\n   * // or with os\n   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))\n   * // or with platforms\n   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))\n   */\n  satisfies(checkTree) {\n    const platformsAndOSes = {};\n    let platformsAndOSCounter = 0;\n    const browsers = {};\n    let browsersCounter = 0;\n\n    const allDefinitions = Object.keys(checkTree);\n\n    allDefinitions.forEach((key) => {\n      const currentDefinition = checkTree[key];\n      if (typeof currentDefinition === 'string') {\n        browsers[key] = currentDefinition;\n        browsersCounter += 1;\n      } else if (typeof currentDefinition === 'object') {\n        platformsAndOSes[key] = currentDefinition;\n        platformsAndOSCounter += 1;\n      }\n    });\n\n    if (platformsAndOSCounter > 0) {\n      const platformsAndOSNames = Object.keys(platformsAndOSes);\n      const OSMatchingDefinition = platformsAndOSNames.find(name => (this.isOS(name)));\n\n      if (OSMatchingDefinition) {\n        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);\n\n        if (osResult !== void 0) {\n          return osResult;\n        }\n      }\n\n      const platformMatchingDefinition = platformsAndOSNames.find(name => (this.isPlatform(name)));\n      if (platformMatchingDefinition) {\n        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);\n\n        if (platformResult !== void 0) {\n          return platformResult;\n        }\n      }\n    }\n\n    if (browsersCounter > 0) {\n      const browserNames = Object.keys(browsers);\n      const matchingDefinition = browserNames.find(name => (this.isBrowser(name, true)));\n\n      if (matchingDefinition !== void 0) {\n        return this.compareVersion(browsers[matchingDefinition]);\n      }\n    }\n\n    return undefined;\n  }\n\n  /**\n   * Check if the browser name equals the passed string\n   * @param browserName The string to compare with the browser name\n   * @param [includingAlias=false] The flag showing whether alias will be included into comparison\n   * @returns {boolean}\n   */\n  isBrowser(browserName, includingAlias = false) {\n    const defaultBrowserName = this.getBrowserName().toLowerCase();\n    let browserNameLower = browserName.toLowerCase();\n    const alias = _utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getBrowserTypeByAlias(browserNameLower);\n\n    if (includingAlias && alias) {\n      browserNameLower = alias.toLowerCase();\n    }\n    return browserNameLower === defaultBrowserName;\n  }\n\n  compareVersion(version) {\n    let expectedResults = [0];\n    let comparableVersion = version;\n    let isLoose = false;\n\n    const currentBrowserVersion = this.getBrowserVersion();\n\n    if (typeof currentBrowserVersion !== 'string') {\n      return void 0;\n    }\n\n    if (version[0] === '>' || version[0] === '<') {\n      comparableVersion = version.substr(1);\n      if (version[1] === '=') {\n        isLoose = true;\n        comparableVersion = version.substr(2);\n      } else {\n        expectedResults = [];\n      }\n      if (version[0] === '>') {\n        expectedResults.push(1);\n      } else {\n        expectedResults.push(-1);\n      }\n    } else if (version[0] === '=') {\n      comparableVersion = version.substr(1);\n    } else if (version[0] === '~') {\n      isLoose = true;\n      comparableVersion = version.substr(1);\n    }\n\n    return expectedResults.indexOf(\n      _utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compareVersions(currentBrowserVersion, comparableVersion, isLoose),\n    ) > -1;\n  }\n\n  isOS(osName) {\n    return this.getOSName(true) === String(osName).toLowerCase();\n  }\n\n  isPlatform(platformType) {\n    return this.getPlatformType(true) === String(platformType).toLowerCase();\n  }\n\n  isEngine(engineName) {\n    return this.getEngineName(true) === String(engineName).toLowerCase();\n  }\n\n  /**\n   * Is anything? Check if the browser is called \"anything\",\n   * the OS called \"anything\" or the platform called \"anything\"\n   * @param {String} anything\n   * @returns {Boolean}\n   */\n  is(anything) {\n    return this.isBrowser(anything) || this.isOS(anything) || this.isPlatform(anything);\n  }\n\n  /**\n   * Check if any of the given values satisfies this.is(anything)\n   * @param {String[]} anythings\n   * @returns {Boolean}\n   */\n  some(anythings = []) {\n    return anythings.some(anything => this.is(anything));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Parser);\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/parser.js?");

/***/ }),

/***/ "./node_modules/bowser/src/utils.js":
/*!******************************************!*\
  !*** ./node_modules/bowser/src/utils.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/bowser/src/constants.js\");\n\n\nclass Utils {\n  /**\n   * Get first matched item for a string\n   * @param {RegExp} regexp\n   * @param {String} ua\n   * @return {Array|{index: number, input: string}|*|boolean|string}\n   */\n  static getFirstMatch(regexp, ua) {\n    const match = ua.match(regexp);\n    return (match && match.length > 0 && match[1]) || '';\n  }\n\n  /**\n   * Get second matched item for a string\n   * @param regexp\n   * @param {String} ua\n   * @return {Array|{index: number, input: string}|*|boolean|string}\n   */\n  static getSecondMatch(regexp, ua) {\n    const match = ua.match(regexp);\n    return (match && match.length > 1 && match[2]) || '';\n  }\n\n  /**\n   * Match a regexp and return a constant or undefined\n   * @param {RegExp} regexp\n   * @param {String} ua\n   * @param {*} _const Any const that will be returned if regexp matches the string\n   * @return {*}\n   */\n  static matchAndReturnConst(regexp, ua, _const) {\n    if (regexp.test(ua)) {\n      return _const;\n    }\n    return void (0);\n  }\n\n  static getWindowsVersionName(version) {\n    switch (version) {\n      case 'NT': return 'NT';\n      case 'XP': return 'XP';\n      case 'NT 5.0': return '2000';\n      case 'NT 5.1': return 'XP';\n      case 'NT 5.2': return '2003';\n      case 'NT 6.0': return 'Vista';\n      case 'NT 6.1': return '7';\n      case 'NT 6.2': return '8';\n      case 'NT 6.3': return '8.1';\n      case 'NT 10.0': return '10';\n      default: return undefined;\n    }\n  }\n\n  /**\n   * Get macOS version name\n   *    10.5 - Leopard\n   *    10.6 - Snow Leopard\n   *    10.7 - Lion\n   *    10.8 - Mountain Lion\n   *    10.9 - Mavericks\n   *    10.10 - Yosemite\n   *    10.11 - El Capitan\n   *    10.12 - Sierra\n   *    10.13 - High Sierra\n   *    10.14 - Mojave\n   *    10.15 - Catalina\n   *\n   * @example\n   *   getMacOSVersionName(\"10.14\") // 'Mojave'\n   *\n   * @param  {string} version\n   * @return {string} versionName\n   */\n  static getMacOSVersionName(version) {\n    const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);\n    v.push(0);\n    if (v[0] !== 10) return undefined;\n    switch (v[1]) {\n      case 5: return 'Leopard';\n      case 6: return 'Snow Leopard';\n      case 7: return 'Lion';\n      case 8: return 'Mountain Lion';\n      case 9: return 'Mavericks';\n      case 10: return 'Yosemite';\n      case 11: return 'El Capitan';\n      case 12: return 'Sierra';\n      case 13: return 'High Sierra';\n      case 14: return 'Mojave';\n      case 15: return 'Catalina';\n      default: return undefined;\n    }\n  }\n\n  /**\n   * Get Android version name\n   *    1.5 - Cupcake\n   *    1.6 - Donut\n   *    2.0 - Eclair\n   *    2.1 - Eclair\n   *    2.2 - Froyo\n   *    2.x - Gingerbread\n   *    3.x - Honeycomb\n   *    4.0 - Ice Cream Sandwich\n   *    4.1 - Jelly Bean\n   *    4.4 - KitKat\n   *    5.x - Lollipop\n   *    6.x - Marshmallow\n   *    7.x - Nougat\n   *    8.x - Oreo\n   *    9.x - Pie\n   *\n   * @example\n   *   getAndroidVersionName(\"7.0\") // 'Nougat'\n   *\n   * @param  {string} version\n   * @return {string} versionName\n   */\n  static getAndroidVersionName(version) {\n    const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);\n    v.push(0);\n    if (v[0] === 1 && v[1] < 5) return undefined;\n    if (v[0] === 1 && v[1] < 6) return 'Cupcake';\n    if (v[0] === 1 && v[1] >= 6) return 'Donut';\n    if (v[0] === 2 && v[1] < 2) return 'Eclair';\n    if (v[0] === 2 && v[1] === 2) return 'Froyo';\n    if (v[0] === 2 && v[1] > 2) return 'Gingerbread';\n    if (v[0] === 3) return 'Honeycomb';\n    if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';\n    if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';\n    if (v[0] === 4 && v[1] >= 4) return 'KitKat';\n    if (v[0] === 5) return 'Lollipop';\n    if (v[0] === 6) return 'Marshmallow';\n    if (v[0] === 7) return 'Nougat';\n    if (v[0] === 8) return 'Oreo';\n    if (v[0] === 9) return 'Pie';\n    return undefined;\n  }\n\n  /**\n   * Get version precisions count\n   *\n   * @example\n   *   getVersionPrecision(\"1.10.3\") // 3\n   *\n   * @param  {string} version\n   * @return {number}\n   */\n  static getVersionPrecision(version) {\n    return version.split('.').length;\n  }\n\n  /**\n   * Calculate browser version weight\n   *\n   * @example\n   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1\n   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1\n   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0\n   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1\n   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0\n   *\n   * @param {String} versionA versions versions to compare\n   * @param {String} versionB versions versions to compare\n   * @param {boolean} [isLoose] enable loose comparison\n   * @return {Number} comparison result: -1 when versionA is lower,\n   * 1 when versionA is bigger, 0 when both equal\n   */\n  /* eslint consistent-return: 1 */\n  static compareVersions(versionA, versionB, isLoose = false) {\n    // 1) get common precision for both versions, for example for \"10.0\" and \"9\" it should be 2\n    const versionAPrecision = Utils.getVersionPrecision(versionA);\n    const versionBPrecision = Utils.getVersionPrecision(versionB);\n\n    let precision = Math.max(versionAPrecision, versionBPrecision);\n    let lastPrecision = 0;\n\n    const chunks = Utils.map([versionA, versionB], (version) => {\n      const delta = precision - Utils.getVersionPrecision(version);\n\n      // 2) \"9\" -> \"9.0\" (for precision = 2)\n      const _version = version + new Array(delta + 1).join('.0');\n\n      // 3) \"9.0\" -> [\"000000000\"\", \"000000009\"]\n      return Utils.map(_version.split('.'), chunk => new Array(20 - chunk.length).join('0') + chunk).reverse();\n    });\n\n    // adjust precision for loose comparison\n    if (isLoose) {\n      lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);\n    }\n\n    // iterate in reverse order by reversed chunks array\n    precision -= 1;\n    while (precision >= lastPrecision) {\n      // 4) compare: \"000000009\" > \"000000010\" = false (but \"9\" > \"10\" = true)\n      if (chunks[0][precision] > chunks[1][precision]) {\n        return 1;\n      }\n\n      if (chunks[0][precision] === chunks[1][precision]) {\n        if (precision === lastPrecision) {\n          // all version chunks are same\n          return 0;\n        }\n\n        precision -= 1;\n      } else if (chunks[0][precision] < chunks[1][precision]) {\n        return -1;\n      }\n    }\n  }\n\n  /**\n   * Array::map polyfill\n   *\n   * @param  {Array} arr\n   * @param  {Function} iterator\n   * @return {Array}\n   */\n  static map(arr, iterator) {\n    const result = [];\n    let i;\n    if (Array.prototype.map) {\n      return Array.prototype.map.call(arr, iterator);\n    }\n    for (i = 0; i < arr.length; i += 1) {\n      result.push(iterator(arr[i]));\n    }\n    return result;\n  }\n\n  /**\n   * Get short version/alias for a browser name\n   *\n   * @example\n   *   getBrowserAlias('Microsoft Edge') // edge\n   *\n   * @param  {string} browserName\n   * @return {string}\n   */\n  static getBrowserAlias(browserName) {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"BROWSER_ALIASES_MAP\"][browserName];\n  }\n\n  /**\n   * Get short version/alias for a browser name\n   *\n   * @example\n   *   getBrowserAlias('edge') // Microsoft Edge\n   *\n   * @param  {string} browserName\n   * @return {string}\n   */\n  static getBrowserTypeByAlias(browserAlia) {\n    return _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"BROWSER_MAP\"][browserAlia] || '';\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/bowser/src/utils.js?");

/***/ }),

/***/ "./node_modules/camelize/index.js":
/*!****************************************!*\
  !*** ./node_modules/camelize/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj) {\n    if (typeof obj === 'string') return camelCase(obj);\n    return walk(obj);\n};\n\nfunction walk (obj) {\n    if (!obj || typeof obj !== 'object') return obj;\n    if (isDate(obj) || isRegex(obj)) return obj;\n    if (isArray(obj)) return map(obj, walk);\n    return reduce(objectKeys(obj), function (acc, key) {\n        var camel = camelCase(key);\n        acc[camel] = walk(obj[key]);\n        return acc;\n    }, {});\n}\n\nfunction camelCase(str) {\n    return str.replace(/[_.-](\\w|$)/g, function (_,x) {\n        return x.toUpperCase();\n    });\n}\n\nvar isArray = Array.isArray || function (obj) {\n    return Object.prototype.toString.call(obj) === '[object Array]';\n};\n\nvar isDate = function (obj) {\n    return Object.prototype.toString.call(obj) === '[object Date]';\n};\n\nvar isRegex = function (obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar has = Object.prototype.hasOwnProperty;\nvar objectKeys = Object.keys || function (obj) {\n    var keys = [];\n    for (var key in obj) {\n        if (has.call(obj, key)) keys.push(key);\n    }\n    return keys;\n};\n\nfunction map (xs, f) {\n    if (xs.map) return xs.map(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        res.push(f(xs[i], i));\n    }\n    return res;\n}\n\nfunction reduce (xs, f, acc) {\n    if (xs.reduce) return xs.reduce(f, acc);\n    for (var i = 0; i < xs.length; i++) {\n        acc = f(acc, xs[i], i);\n    }\n    return acc;\n}\n\n\n//# sourceURL=webpack:///./node_modules/camelize/index.js?");

/***/ }),

/***/ "./node_modules/content-security-policy-builder/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/content-security-policy-builder/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction dashify(str) {\n    return str\n        .replace(/([a-z])([A-Z])/g, '$1-$2')\n        .toLowerCase();\n}\nmodule.exports = function (_a) {\n    var directives = _a.directives;\n    var keysSeen = {};\n    return Object.keys(directives).reduce(function (result, originalKey) {\n        var directive = dashify(originalKey);\n        if (keysSeen[directive]) {\n            throw new Error(originalKey + \" is specified more than once\");\n        }\n        keysSeen[directive] = true;\n        var value = directives[originalKey];\n        if (Array.isArray(value)) {\n            value = value.join(' ');\n        }\n        else if (value === true) {\n            value = '';\n        }\n        else if (value === false) {\n            return result;\n        }\n        if (value) {\n            return result.concat(directive + \" \" + value);\n        }\n        else {\n            return result.concat(directive);\n        }\n    }, []).join('; ');\n};\n\n\n//# sourceURL=webpack:///./node_modules/content-security-policy-builder/dist/index.js?");

/***/ }),

/***/ "./node_modules/dasherize/index.js":
/*!*****************************************!*\
  !*** ./node_modules/dasherize/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArray = Array.isArray || function (obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]';\n};\n\nvar isDate = function (obj) {\n  return Object.prototype.toString.call(obj) === '[object Date]';\n};\n\nvar isRegex = function (obj) {\n  return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar has = Object.prototype.hasOwnProperty;\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n  return keys;\n};\n\nfunction dashCase(str) {\n  return str.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g, function (s, i) {\n    return (i > 0 ? '-' : '') + s.toLowerCase();\n  });\n}\n\nfunction map(xs, f) {\n  if (xs.map) {\n    return xs.map(f);\n  }\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nfunction reduce(xs, f, acc) {\n  if (xs.reduce) {\n    return xs.reduce(f, acc);\n  }\n  for (var i = 0; i < xs.length; i++) {\n    acc = f(acc, xs[i], i);\n  }\n  return acc;\n}\n\nfunction walk(obj) {\n  if (!obj || typeof obj !== 'object') {\n    return obj;\n  }\n  if (isDate(obj) || isRegex(obj)) {\n    return obj;\n  }\n  if (isArray(obj)) {\n    return map(obj, walk);\n  }\n  return reduce(objectKeys(obj), function (acc, key) {\n    var camel = dashCase(key);\n    acc[camel] = walk(obj[key]);\n    return acc;\n  }, {});\n}\n\nmodule.exports = function (obj) {\n  if (typeof obj === 'string') {\n    return dashCase(obj);\n  }\n  return walk(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/dasherize/index.js?");

/***/ }),

/***/ "./node_modules/dns-prefetch-control/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/dns-prefetch-control/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction getHeaderValueFromOptions(options) {\n    if (options && options.allow) {\n        return 'on';\n    }\n    else {\n        return 'off';\n    }\n}\nmodule.exports = function dnsPrefetchControl(options) {\n    var headerValue = getHeaderValueFromOptions(options);\n    return function dnsPrefetchControl(_req, res, next) {\n        res.setHeader('X-DNS-Prefetch-Control', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/dns-prefetch-control/dist/index.js?");

/***/ }),

/***/ "./node_modules/dont-sniff-mimetype/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/dont-sniff-mimetype/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function nosniff() {\n    return function nosniff(_req, res, next) {\n        res.setHeader('X-Content-Type-Options', 'nosniff');\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/dont-sniff-mimetype/dist/index.js?");

/***/ }),

/***/ "./node_modules/expect-ct/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/expect-ct/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction parseMaxAge(option) {\n    if (option === undefined) {\n        return 0;\n    }\n    if (typeof option !== 'number' || option < 0) {\n        throw new Error(option + \" is not a valid value for maxAge. Please choose a positive integer.\");\n    }\n    return option;\n}\nfunction getHeaderValueFromOptions(options) {\n    options = options || {};\n    var directives = [];\n    if (options.enforce) {\n        directives.push('enforce');\n    }\n    directives.push(\"max-age=\" + parseMaxAge(options.maxAge));\n    if (options.reportUri) {\n        directives.push(\"report-uri=\\\"\" + options.reportUri + \"\\\"\");\n    }\n    return directives.join(', ');\n}\nmodule.exports = function expectCt(options) {\n    var headerValue = getHeaderValueFromOptions(options);\n    return function expectCt(_req, res, next) {\n        res.setHeader('Expect-CT', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/expect-ct/dist/index.js?");

/***/ }),

/***/ "./node_modules/feature-policy/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/feature-policy/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction isPlainObject(value) {\n    return Boolean(value &&\n        !Array.isArray(value) &&\n        typeof value === 'object');\n}\nfunction getHeaderValueFromOptions(options) {\n    var FEATURES = {\n        accelerometer: 'accelerometer',\n        ambientLightSensor: 'ambient-light-sensor',\n        autoplay: 'autoplay',\n        camera: 'camera',\n        documentDomain: 'document-domain',\n        documentWrite: 'document-write',\n        encryptedMedia: 'encrypted-media',\n        fontDisplayLateSwap: 'font-display-late-swap',\n        fullscreen: 'fullscreen',\n        geolocation: 'geolocation',\n        gyroscope: 'gyroscope',\n        layoutAnimations: 'layout-animations',\n        legacyImageFormats: 'legacy-image-formats',\n        loadingFrameDefaultEager: 'loading-frame-default-eager',\n        magnetometer: 'magnetometer',\n        microphone: 'microphone',\n        midi: 'midi',\n        notifications: 'notifications',\n        oversizedImages: 'oversized-images',\n        payment: 'payment',\n        pictureInPicture: 'picture-in-picture',\n        push: 'push',\n        serial: 'serial',\n        speaker: 'speaker',\n        syncScript: 'sync-script',\n        syncXhr: 'sync-xhr',\n        unoptimizedImages: 'unoptimized-images',\n        unoptimizedLosslessImages: 'unoptimized-lossless-images',\n        unoptimizedLossyImages: 'unoptimized-lossy-images',\n        unsizedMedia: 'unsized-media',\n        usb: 'usb',\n        verticalScroll: 'vertical-scroll',\n        vibrate: 'vibrate',\n        vr: 'vr',\n        wakeLock: 'wake-lock',\n        xr: 'xr',\n    };\n    if (!isPlainObject(options)) {\n        throw new Error('featurePolicy must be called with an object argument. See the documentation.');\n    }\n    var features = options.features;\n    if (!isPlainObject(features)) {\n        throw new Error('featurePolicy must have a single key, \"features\", which is an object of features. See the documentation.');\n    }\n    var result = Object.keys(features).map(function (featureKeyCamelCase) {\n        if (!Object.prototype.hasOwnProperty.call(FEATURES, featureKeyCamelCase)) {\n            throw new Error(\"featurePolicy does not support the \\\"\" + featureKeyCamelCase + \"\\\" feature.\");\n        }\n        var featureValue = features[featureKeyCamelCase];\n        if (!Array.isArray(featureValue) || featureValue.length === 0) {\n            throw new Error(\"The value of the \\\"\" + featureKeyCamelCase + \"\\\" feature must be a non-empty array.\");\n        }\n        var containsStar = false;\n        var containsNone = false;\n        featureValue.forEach(function (allowed) {\n            if (allowed === '*') {\n                containsStar = true;\n            }\n            else if (allowed === \"'none'\") {\n                containsNone = true;\n            }\n            else if (allowed === 'self') {\n                throw new Error(\"'self' must be quoted.\");\n            }\n            else if (allowed === 'none') {\n                throw new Error(\"'none' must be quoted.\");\n            }\n        });\n        if (featureValue.length > 1) {\n            if (containsStar) {\n                throw new Error(\"The value of the \\\"\" + featureKeyCamelCase + \"\\\" feature cannot contain * and other values.\");\n            }\n            else if (containsNone) {\n                throw new Error(\"The value of the \\\"\" + featureKeyCamelCase + \"\\\" feature cannot contain 'none' and other values.\");\n            }\n        }\n        var featureKeyDashed = FEATURES[featureKeyCamelCase];\n        return [featureKeyDashed].concat(featureValue).join(' ');\n    }).join(';');\n    if (result.length === 0) {\n        throw new Error('At least one feature is required.');\n    }\n    return result;\n}\nmodule.exports = function featurePolicy(options) {\n    var headerValue = getHeaderValueFromOptions(options);\n    return function featurePolicy(_req, res, next) {\n        res.setHeader('Feature-Policy', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/feature-policy/dist/index.js?");

/***/ }),

/***/ "./node_modules/frameguard/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/frameguard/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction parseActionOption(actionOption) {\n    var invalidActionErr = new Error('action must be undefined, \"DENY\", \"ALLOW-FROM\", or \"SAMEORIGIN\".');\n    if (actionOption === undefined) {\n        actionOption = 'SAMEORIGIN';\n    }\n    else if (actionOption instanceof String) {\n        actionOption = actionOption.valueOf();\n    }\n    var result;\n    if (typeof actionOption === 'string') {\n        result = actionOption.toUpperCase();\n    }\n    else {\n        throw invalidActionErr;\n    }\n    if (result === 'ALLOWFROM') {\n        result = 'ALLOW-FROM';\n    }\n    else if (result === 'SAME-ORIGIN') {\n        result = 'SAMEORIGIN';\n    }\n    if (['DENY', 'ALLOW-FROM', 'SAMEORIGIN'].indexOf(result) === -1) {\n        throw invalidActionErr;\n    }\n    return result;\n}\nfunction parseDomainOption(domainOption) {\n    if (domainOption instanceof String) {\n        domainOption = domainOption.valueOf();\n    }\n    if (typeof domainOption !== 'string') {\n        throw new Error('ALLOW-FROM action requires a string domain parameter.');\n    }\n    else if (!domainOption.length) {\n        throw new Error('domain parameter must not be empty.');\n    }\n    return domainOption;\n}\nfunction getHeaderValueFromOptions(options) {\n    options = options || {};\n    var action = parseActionOption(options.action);\n    if (action === 'ALLOW-FROM') {\n        var domain = parseDomainOption(options.domain);\n        return action + \" \" + domain;\n    }\n    else {\n        return action;\n    }\n}\nmodule.exports = function frameguard(options) {\n    var headerValue = getHeaderValueFromOptions(options);\n    return function frameguard(_req, res, next) {\n        res.setHeader('X-Frame-Options', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/frameguard/dist/index.js?");

/***/ }),

/***/ "./node_modules/helmet-crossdomain/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/helmet-crossdomain/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction getHeaderValueFromOptions(options) {\n    var DEFAULT_PERMITTED_POLICIES = 'none';\n    var ALLOWED_POLICIES = [\n        'none',\n        'master-only',\n        'by-content-type',\n        'all',\n    ];\n    var permittedPolicies;\n    if ('permittedPolicies' in options) {\n        permittedPolicies = options.permittedPolicies;\n    }\n    else {\n        permittedPolicies = DEFAULT_PERMITTED_POLICIES;\n    }\n    if (ALLOWED_POLICIES.indexOf(permittedPolicies) === -1) {\n        throw new Error(\"\\\"\" + permittedPolicies + \"\\\" is not a valid permitted policy. Allowed values: \" + ALLOWED_POLICIES.join(', ') + \".\");\n    }\n    return permittedPolicies;\n}\nmodule.exports = function crossdomain(options) {\n    if (options === void 0) { options = {}; }\n    var headerValue = getHeaderValueFromOptions(options);\n    return function crossdomain(_req, res, next) {\n        res.setHeader('X-Permitted-Cross-Domain-Policies', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-crossdomain/dist/index.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/helmet-csp/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar camelize_1 = __importDefault(__webpack_require__(/*! camelize */ \"./node_modules/camelize/index.js\"));\nvar content_security_policy_builder_1 = __importDefault(__webpack_require__(/*! content-security-policy-builder */ \"./node_modules/content-security-policy-builder/dist/index.js\"));\nvar Bowser = __importStar(__webpack_require__(/*! bowser */ \"./node_modules/bowser/src/bowser.js\"));\nvar is_function_1 = __importDefault(__webpack_require__(/*! ./lib/is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nvar check_options_1 = __importDefault(__webpack_require__(/*! ./lib/check-options */ \"./node_modules/helmet-csp/dist/lib/check-options/index.js\"));\nvar contains_function_1 = __importDefault(__webpack_require__(/*! ./lib/contains-function */ \"./node_modules/helmet-csp/dist/lib/contains-function.js\"));\nvar get_header_keys_for_browser_1 = __importDefault(__webpack_require__(/*! ./lib/get-header-keys-for-browser */ \"./node_modules/helmet-csp/dist/lib/get-header-keys-for-browser.js\"));\nvar transform_directives_for_browser_1 = __importDefault(__webpack_require__(/*! ./lib/transform-directives-for-browser */ \"./node_modules/helmet-csp/dist/lib/transform-directives-for-browser.js\"));\nvar parse_dynamic_directives_1 = __importDefault(__webpack_require__(/*! ./lib/parse-dynamic-directives */ \"./node_modules/helmet-csp/dist/lib/parse-dynamic-directives.js\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ./lib/config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nmodule.exports = function csp(options) {\n    check_options_1.default(options);\n    var originalDirectives = camelize_1.default(options.directives || {});\n    var directivesAreDynamic = contains_function_1.default(originalDirectives);\n    var shouldBrowserSniff = options.browserSniff !== false;\n    if (shouldBrowserSniff) {\n        return function csp(req, res, next) {\n            var userAgent = req.headers['user-agent'];\n            var browser;\n            if (userAgent) {\n                browser = Bowser.getParser(userAgent);\n            }\n            else {\n                browser = undefined;\n            }\n            var headerKeys;\n            if (options.setAllHeaders || !userAgent) {\n                headerKeys = config_1.default.allHeaders;\n            }\n            else {\n                headerKeys = get_header_keys_for_browser_1.default(browser, options);\n            }\n            if (headerKeys.length === 0) {\n                next();\n                return;\n            }\n            var directives = transform_directives_for_browser_1.default(browser, originalDirectives);\n            if (directivesAreDynamic) {\n                directives = parse_dynamic_directives_1.default(directives, [req, res]);\n            }\n            var policyString = content_security_policy_builder_1.default({ directives: directives });\n            headerKeys.forEach(function (headerKey) {\n                if (is_function_1.default(options.reportOnly) && options.reportOnly(req, res) ||\n                    !is_function_1.default(options.reportOnly) && options.reportOnly) {\n                    headerKey += '-Report-Only';\n                }\n                res.setHeader(headerKey, policyString);\n            });\n            next();\n        };\n    }\n    else {\n        var headerKeys_1 = options.setAllHeaders ? config_1.default.allHeaders : ['Content-Security-Policy'];\n        return function csp(req, res, next) {\n            var directives = parse_dynamic_directives_1.default(originalDirectives, [req, res]);\n            var policyString = content_security_policy_builder_1.default({ directives: directives });\n            if (is_function_1.default(options.reportOnly) && options.reportOnly(req, res) ||\n                !is_function_1.default(options.reportOnly) && options.reportOnly) {\n                headerKeys_1.forEach(function (headerKey) {\n                    res.setHeader(headerKey + \"-Report-Only\", policyString);\n                });\n            }\n            else {\n                headerKeys_1.forEach(function (headerKey) {\n                    res.setHeader(headerKey, policyString);\n                });\n            }\n            next();\n        };\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/index.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/boolean.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/boolean.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar is_boolean_1 = __importDefault(__webpack_require__(/*! ../../is-boolean */ \"./node_modules/helmet-csp/dist/lib/is-boolean.js\"));\nmodule.exports = function (key, value) {\n    if (!is_boolean_1.default(value)) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use `true` or `false`.\");\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/boolean.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nvar boolean_1 = __importDefault(__webpack_require__(/*! ./boolean */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/boolean.js\"));\nvar plugin_types_1 = __importDefault(__webpack_require__(/*! ./plugin-types */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/plugin-types.js\"));\nvar report_uri_1 = __importDefault(__webpack_require__(/*! ./report-uri */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/report-uri.js\"));\nvar require_sri_for_1 = __importDefault(__webpack_require__(/*! ./require-sri-for */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/require-sri-for.js\"));\nvar sandbox_1 = __importDefault(__webpack_require__(/*! ./sandbox */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/sandbox.js\"));\nvar source_list_1 = __importDefault(__webpack_require__(/*! ./source-list */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/source-list.js\"));\nvar checkers = {\n    boolean: boolean_1.default,\n    pluginTypes: plugin_types_1.default,\n    reportUri: report_uri_1.default,\n    requireSriFor: require_sri_for_1.default,\n    sandbox: sandbox_1.default,\n    sourceList: source_list_1.default,\n};\nmodule.exports = function checkDirective(key, value, options) {\n    if (options.loose) {\n        return;\n    }\n    if (!Object.prototype.hasOwnProperty.call(config_1.default.directives, key)) {\n        throw new Error(\"\\\"\" + key + \"\\\" is an invalid directive. See the documentation for the supported list. Force this by enabling loose mode.\");\n    }\n    // This cast is safe thanks to the above check.\n    var directiveType = config_1.default.directives[key].type;\n    checkers[directiveType](key, value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/index.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/plugin-types.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/plugin-types.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nvar is_function_1 = __importDefault(__webpack_require__(/*! ../../is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nvar notAllowed = ['self', \"'self'\"].concat(config_1.default.unsafes);\nmodule.exports = function pluginTypesCheck(key, value) {\n    if (!Array.isArray(value)) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use an array of strings.\");\n    }\n    if (value.length === 0) {\n        throw new Error(key + \" must have at least one value. To block everything, set \" + key + \" to [\\\"'none'\\\"].\");\n    }\n    value.forEach(function (pluginType) {\n        if (!pluginType) {\n            throw new Error(\"\\\"\" + pluginType + \"\\\" is not a valid plugin type. Only non-empty strings are allowed.\");\n        }\n        if (is_function_1.default(pluginType)) {\n            return;\n        }\n        pluginType = pluginType.valueOf();\n        if (typeof pluginType !== 'string' || pluginType.length === 0) {\n            throw new Error(\"\\\"\" + pluginType + \"\\\" is not a valid plugin type. Only non-empty strings are allowed.\");\n        }\n        if (notAllowed.indexOf(pluginType) !== -1) {\n            throw new Error(\"\\\"\" + pluginType + \"\\\" does not make sense in \" + key + \". Remove it.\");\n        }\n        if (config_1.default.mustQuote.indexOf(pluginType) !== -1) {\n            throw new Error(\"\\\"\" + pluginType + \"\\\" must be quoted in \" + key + \". Change it to \\\"'\" + pluginType + \"'\\\" in your source list. Force this by enabling loose mode.\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/plugin-types.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/report-uri.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/report-uri.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar is_function_1 = __importDefault(__webpack_require__(/*! ../../is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nvar is_string_1 = __importDefault(__webpack_require__(/*! ../../is-string */ \"./node_modules/helmet-csp/dist/lib/is-string.js\"));\nmodule.exports = function (key, value) {\n    if (value === false) {\n        return;\n    }\n    if (is_function_1.default(value)) {\n        return;\n    }\n    if (!is_string_1.default(value) || value.length === 0) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use a non-empty string.\");\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/report-uri.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/require-sri-for.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/require-sri-for.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nvar is_function_1 = __importDefault(__webpack_require__(/*! ../../is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nmodule.exports = function requireSriForCheck(key, value) {\n    if (!Array.isArray(value)) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use an array of strings.\");\n    }\n    if (value.length === 0) {\n        throw new Error(key + \" must have at least one value. To require nothing, omit the directive.\");\n    }\n    value.forEach(function (expression) {\n        if (is_function_1.default(expression)) {\n            return;\n        }\n        if (config_1.default.requireSriForValues.indexOf(expression) === -1) {\n            throw new Error(\"\\\"\" + expression + \"\\\" is not a valid \" + key + \" value. Remove it.\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/require-sri-for.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/sandbox.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/sandbox.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nvar is_function_1 = __importDefault(__webpack_require__(/*! ../../is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nmodule.exports = function sandboxCheck(key, value) {\n    if (value === false) {\n        return;\n    }\n    if (value === true) {\n        return;\n    }\n    if (!Array.isArray(value)) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use an array of strings or `true`.\");\n    }\n    if (value.length === 0) {\n        throw new Error(key + \" must have at least one value. To block everything, set \" + key + \" to `true`.\");\n    }\n    value.forEach(function (expression) {\n        if (is_function_1.default(expression)) {\n            return;\n        }\n        if (config_1.default.sandboxDirectives.indexOf(expression) === -1) {\n            throw new Error(\"\\\"\" + expression + \"\\\" is not a valid \" + key + \" directive. Remove it.\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/sandbox.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/check-directive/source-list.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/check-directive/source-list.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nvar is_function_1 = __importDefault(__webpack_require__(/*! ../../is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nmodule.exports = function sourceListCheck(key, value) {\n    if (value === false) {\n        return;\n    }\n    if (!Array.isArray(value)) {\n        throw new Error(\"\\\"\" + value + \"\\\" is not a valid value for \" + key + \". Use an array of strings.\");\n    }\n    if (value.length === 0) {\n        throw new Error(key + \" must have at least one value. To block everything, set \" + key + \" to [\\\"'none'\\\"].\");\n    }\n    value.forEach(function (sourceExpression) {\n        if (!sourceExpression) {\n            throw new Error(\"\\\"\" + sourceExpression + \"\\\" is not a valid source expression. Only non-empty strings are allowed.\");\n        }\n        if (is_function_1.default(sourceExpression)) {\n            return;\n        }\n        sourceExpression = sourceExpression.valueOf();\n        if (typeof sourceExpression !== 'string' || sourceExpression.length === 0) {\n            throw new Error(\"\\\"\" + sourceExpression + \"\\\" is not a valid source expression. Only non-empty strings are allowed.\");\n        }\n        var directiveInfo = config_1.default.directives[key];\n        if (!directiveInfo.hasUnsafes && config_1.default.unsafes.indexOf(sourceExpression) !== -1 ||\n            !directiveInfo.hasStrictDynamic && config_1.default.strictDynamics.indexOf(sourceExpression) !== -1) {\n            throw new Error(\"\\\"\" + sourceExpression + \"\\\" does not make sense in \" + key + \". Remove it.\");\n        }\n        if (config_1.default.mustQuote.indexOf(sourceExpression) !== -1) {\n            throw new Error(\"\\\"\" + sourceExpression + \"\\\" must be quoted in \" + key + \". Change it to \\\"'\" + sourceExpression + \"'\\\" in your source list. Force this by enabling loose mode.\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/check-directive/source-list.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/check-options/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/check-options/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar dasherize_1 = __importDefault(__webpack_require__(/*! dasherize */ \"./node_modules/dasherize/index.js\"));\nvar check_directive_1 = __importDefault(__webpack_require__(/*! ./check-directive */ \"./node_modules/helmet-csp/dist/lib/check-options/check-directive/index.js\"));\nfunction isObject(value) {\n    return Object.prototype.toString.call(value) === '[object Object]';\n}\nmodule.exports = function (options) {\n    if (!isObject(options)) {\n        throw new Error('csp must be called with an object argument. See the documentation.');\n    }\n    var directives = options.directives;\n    if (!isObject(directives) || Object.keys(directives).length === 0) {\n        throw new Error('csp must have at least one directive under the \"directives\" key. See the documentation.');\n    }\n    Object.keys(directives).forEach(function (directiveKey) {\n        var typedKey = directiveKey;\n        check_directive_1.default(dasherize_1.default(directiveKey), directives[typedKey], options);\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/check-options/index.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/config.js":
/*!****************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = {\n    directives: {\n        'base-uri': { type: 'sourceList' },\n        'block-all-mixed-content': { type: 'boolean' },\n        'child-src': { type: 'sourceList' },\n        'connect-src': { type: 'sourceList' },\n        'default-src': {\n            type: 'sourceList',\n            hasStrictDynamic: true,\n        },\n        'font-src': { type: 'sourceList' },\n        'form-action': { type: 'sourceList' },\n        'frame-ancestors': { type: 'sourceList' },\n        'frame-src': { type: 'sourceList' },\n        'img-src': { type: 'sourceList' },\n        'manifest-src': { type: 'sourceList' },\n        'media-src': { type: 'sourceList' },\n        'object-src': { type: 'sourceList' },\n        'script-src': {\n            type: 'sourceList',\n            hasUnsafes: true,\n            hasStrictDynamic: true,\n        },\n        'style-src': {\n            type: 'sourceList',\n            hasUnsafes: true,\n        },\n        'prefetch-src': { type: 'sourceList' },\n        'plugin-types': { type: 'pluginTypes' },\n        sandbox: { type: 'sandbox' },\n        'report-to': { type: 'reportUri' },\n        'report-uri': { type: 'reportUri' },\n        'require-sri-for': { type: 'requireSriFor' },\n        'upgrade-insecure-requests': { type: 'boolean' },\n        'worker-src': {\n            type: 'sourceList',\n            hasUnsafes: true,\n        },\n    },\n    allHeaders: [\n        'Content-Security-Policy',\n        'X-Content-Security-Policy',\n        'X-WebKit-CSP',\n    ],\n    mustQuote: ['none', 'self', 'unsafe-inline', 'unsafe-eval', 'strict-dynamic'],\n    unsafes: [\"'unsafe-inline'\", 'unsafe-inline', \"'unsafe-eval'\", 'unsafe-eval'],\n    strictDynamics: [\"'strict-dynamic'\", 'strict-dynamic'],\n    requireSriForValues: ['script', 'style'],\n    sandboxDirectives: [\n        'allow-downloads-without-user-activation',\n        'allow-forms',\n        'allow-modals',\n        'allow-orientation-lock',\n        'allow-pointer-lock',\n        'allow-popups',\n        'allow-popups-to-escape-sandbox',\n        'allow-presentation',\n        'allow-same-origin',\n        'allow-scripts',\n        'allow-top-navigation',\n    ],\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/config.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/contains-function.js":
/*!***************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/contains-function.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar is_function_1 = __importDefault(__webpack_require__(/*! ./is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nmodule.exports = function containsFunction(obj) {\n    for (var key in obj) {\n        if (!Object.prototype.hasOwnProperty.call(obj, key)) {\n            continue;\n        }\n        var value = obj[key];\n        if (Array.isArray(value) && value.some(is_function_1.default) || is_function_1.default(value)) {\n            return true;\n        }\n    }\n    return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/contains-function.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/get-header-keys-for-browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/get-header-keys-for-browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./node_modules/helmet-csp/dist/lib/config.js\"));\nfunction goodBrowser() {\n    return ['Content-Security-Policy'];\n}\nvar handlersByBrowserName = {\n    'Android Browser': function (browser) {\n        var osVersionName = browser.getOS().versionName;\n        if (osVersionName && parseFloat(osVersionName) < 4.4) {\n            return [];\n        }\n        return ['Content-Security-Policy'];\n    },\n    Chrome: function (browser) {\n        var browserVersion = parseFloat(browser.getBrowserVersion());\n        if (browserVersion >= 14 && browserVersion < 25) {\n            return ['X-WebKit-CSP'];\n        }\n        else if (browserVersion >= 25) {\n            return ['Content-Security-Policy'];\n        }\n        else {\n            return [];\n        }\n    },\n    'Chrome Mobile': function (browser, options) {\n        if (browser.getOSName() === 'iOS') {\n            return ['Content-Security-Policy'];\n        }\n        else {\n            return handlersByBrowserName['Android Browser'](browser, options);\n        }\n    },\n    Firefox: function (browser) {\n        var osName = browser.getOSName();\n        if (osName === 'iOS') {\n            return ['Content-Security-Policy'];\n        }\n        var browserVersion = parseFloat(browser.getBrowserVersion());\n        if (osName === 'Android') {\n            if (browserVersion >= 25) {\n                return ['Content-Security-Policy'];\n            }\n            else {\n                return ['X-Content-Security-Policy'];\n            }\n        }\n        else if (browser.getPlatformType(true) === 'mobile') {\n            // This is probably Firefox OS.\n            if (browserVersion >= 32) {\n                return ['Content-Security-Policy'];\n            }\n            else {\n                return ['X-Content-Security-Policy'];\n            }\n        }\n        else if (browserVersion >= 23) {\n            return ['Content-Security-Policy'];\n        }\n        else if (browserVersion >= 4 && browserVersion < 23) {\n            return ['X-Content-Security-Policy'];\n        }\n        else {\n            return [];\n        }\n    },\n    'Internet Explorer': function (browser) {\n        var browserVersion = parseFloat(browser.getBrowserVersion());\n        var header = browserVersion < 12 ? 'X-Content-Security-Policy' : 'Content-Security-Policy';\n        return [header];\n    },\n    'Microsoft Edge': goodBrowser,\n    'Microsoft Edge Mobile': goodBrowser,\n    Opera: function (browser) {\n        var browserVersion = parseFloat(browser.getBrowserVersion());\n        if (browserVersion >= 15) {\n            return ['Content-Security-Policy'];\n        }\n        else {\n            return [];\n        }\n    },\n    Safari: function (browser) {\n        var browserVersion = parseFloat(browser.getBrowserVersion());\n        if (browserVersion >= 7) {\n            return ['Content-Security-Policy'];\n        }\n        else if (browserVersion >= 6) {\n            return ['X-WebKit-CSP'];\n        }\n        else {\n            return [];\n        }\n    },\n};\nmodule.exports = function getHeaderKeysForBrowser(browser, options) {\n    if (!browser) {\n        return config_1.default.allHeaders;\n    }\n    if (options.disableAndroid && browser.getOSName() === 'Android') {\n        return [];\n    }\n    var browserName = browser.getBrowserName();\n    if (Object.prototype.hasOwnProperty.call(handlersByBrowserName, browserName)) {\n        return handlersByBrowserName[browserName](browser, options);\n    }\n    else {\n        return config_1.default.allHeaders;\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/get-header-keys-for-browser.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/is-boolean.js":
/*!********************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/is-boolean.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function isBoolean(value) {\n    return Object.prototype.toString.call(value) === '[object Boolean]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/is-boolean.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/is-function.js":
/*!*********************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/is-function.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function isFunction(value) {\n    return value instanceof Function;\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/is-function.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/is-string.js":
/*!*******************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/is-string.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function isString(value) {\n    return Object.prototype.toString.call(value) === '[object String]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/is-string.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/parse-dynamic-directives.js":
/*!**********************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/parse-dynamic-directives.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar is_function_1 = __importDefault(__webpack_require__(/*! ./is-function */ \"./node_modules/helmet-csp/dist/lib/is-function.js\"));\nvar is_string_1 = __importDefault(__webpack_require__(/*! ./is-string */ \"./node_modules/helmet-csp/dist/lib/is-string.js\"));\nmodule.exports = function parseDynamicDirectives(directives, functionArgs) {\n    var result = {};\n    Object.keys(directives).forEach(function (key) {\n        var typedKey = key;\n        var value = directives[typedKey];\n        if (Array.isArray(value)) {\n            result[typedKey] = value.map(function (element) {\n                if (is_function_1.default(element)) {\n                    return element.apply(void 0, functionArgs);\n                }\n                else {\n                    return element;\n                }\n            });\n        }\n        else if (is_function_1.default(value)) {\n            result[typedKey] = value.apply(void 0, functionArgs);\n        }\n        else if (value === true || is_string_1.default(value)) {\n            result[typedKey] = value;\n        }\n    });\n    return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/parse-dynamic-directives.js?");

/***/ }),

/***/ "./node_modules/helmet-csp/dist/lib/transform-directives-for-browser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/helmet-csp/dist/lib/transform-directives-for-browser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction transformDirectivesForPreCsp1Firefox(directives, basePolicy) {\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    var result = Object.assign({}, basePolicy);\n    // Copy `connectSrc` to `xhrSrc`\n    var connectSrc = directives.connectSrc;\n    if (connectSrc) {\n        result.xhrSrc = connectSrc;\n    }\n    // Copy everything else\n    Object.keys(directives).forEach(function (key) {\n        if (key !== 'connectSrc') {\n            result[key] = directives[key];\n        }\n    });\n    // Rename `scriptSrc` values `unsafe-inline` and `unsafe-eval`\n    var scriptSrc = directives.scriptSrc;\n    if (scriptSrc) {\n        var optionsValues = [];\n        if (scriptSrc.indexOf(\"'unsafe-inline'\") !== -1) {\n            optionsValues.push('inline-script');\n        }\n        if (scriptSrc.indexOf(\"'unsafe-eval'\") !== -1) {\n            optionsValues.push('eval-script');\n        }\n        if (optionsValues.length !== 0) {\n            result.options = optionsValues;\n        }\n    }\n    return result;\n}\nmodule.exports = function transformDirectivesForBrowser(browser, directives) {\n    // For now, Firefox is the only browser that needs to be transformed.\n    if (!browser || browser.getBrowserName() !== 'Firefox') {\n        return directives;\n    }\n    var osName = browser.getOSName();\n    if (osName === 'iOS') {\n        return directives;\n    }\n    var browserVersion = parseFloat(browser.getBrowserVersion());\n    if (osName === 'Android' && browserVersion < 25 ||\n        browser.getPlatformType(true) === 'mobile' && browserVersion < 32) {\n        return transformDirectivesForPreCsp1Firefox(directives, { defaultSrc: ['*'] });\n    }\n    else if (browserVersion >= 4 && browserVersion < 23) {\n        var basePolicy = {};\n        if (browserVersion < 5) {\n            basePolicy.allow = ['*'];\n            if (directives.defaultSrc) {\n                basePolicy.allow = directives.defaultSrc;\n                directives = Object.assign({}, directives);\n                delete directives.defaultSrc;\n            }\n        }\n        else {\n            basePolicy.defaultSrc = ['*'];\n        }\n        return transformDirectivesForPreCsp1Firefox(directives, basePolicy);\n    }\n    else {\n        return directives;\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/helmet-csp/dist/lib/transform-directives-for-browser.js?");

/***/ }),

/***/ "./node_modules/helmet/index.js":
/*!**************************************!*\
  !*** ./node_modules/helmet/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deprecate = __webpack_require__(/*! depd */ \"depd\")('helmet')\n\nvar DEFAULT_MIDDLEWARE = [\n  'dnsPrefetchControl',\n  'frameguard',\n  'hidePoweredBy',\n  'hsts',\n  'ieNoOpen',\n  'noSniff',\n  'xssFilter'\n]\n\nvar middlewares\nfunction helmet (options) {\n  options = options || {}\n\n  if (options.constructor.name === 'IncomingMessage') {\n    throw new Error('It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.')\n  }\n\n  var stack = middlewares.reduce(function (result, middlewareName) {\n    var middleware = helmet[middlewareName]\n    var middlewareOptions = options[middlewareName]\n    var isDefault = DEFAULT_MIDDLEWARE.indexOf(middlewareName) !== -1\n\n    if (middlewareOptions === false) {\n      return result\n    } else if (middlewareOptions === true) {\n      middlewareOptions = {}\n    }\n\n    if (middlewareOptions != null) {\n      return result.concat(middleware(middlewareOptions))\n    } else if (isDefault) {\n      return result.concat(middleware({}))\n    }\n    return result\n  }, [])\n\n  return function helmet (req, res, next) {\n    var index = 0\n\n    function internalNext () {\n      if (arguments.length > 0) { return next.apply(null, arguments) }\n\n      var middleware = stack[index]\n      if (!middleware) { return next() }\n\n      index++\n\n      middleware(req, res, internalNext)\n    }\n\n    internalNext()\n  }\n}\n\nhelmet.contentSecurityPolicy = __webpack_require__(/*! helmet-csp */ \"./node_modules/helmet-csp/dist/index.js\")\nhelmet.dnsPrefetchControl = __webpack_require__(/*! dns-prefetch-control */ \"./node_modules/dns-prefetch-control/dist/index.js\")\nhelmet.expectCt = __webpack_require__(/*! expect-ct */ \"./node_modules/expect-ct/dist/index.js\")\nhelmet.featurePolicy = __webpack_require__(/*! feature-policy */ \"./node_modules/feature-policy/dist/index.js\")\nhelmet.frameguard = __webpack_require__(/*! frameguard */ \"./node_modules/frameguard/dist/index.js\")\nhelmet.hidePoweredBy = __webpack_require__(/*! hide-powered-by */ \"./node_modules/hide-powered-by/dist/index.js\")\nhelmet.hsts = __webpack_require__(/*! hsts */ \"./node_modules/hsts/index.js\")\nhelmet.ieNoOpen = __webpack_require__(/*! ienoopen */ \"./node_modules/ienoopen/dist/index.js\")\nhelmet.noCache = __webpack_require__(/*! nocache */ \"./node_modules/nocache/dist/index.js\")\nhelmet.noSniff = __webpack_require__(/*! dont-sniff-mimetype */ \"./node_modules/dont-sniff-mimetype/dist/index.js\")\nhelmet.permittedCrossDomainPolicies = __webpack_require__(/*! helmet-crossdomain */ \"./node_modules/helmet-crossdomain/dist/index.js\")\nhelmet.referrerPolicy = __webpack_require__(/*! referrer-policy */ \"./node_modules/referrer-policy/dist/index.js\")\nhelmet.xssFilter = __webpack_require__(/*! x-xss-protection */ \"./node_modules/x-xss-protection/dist/index.js\")\n\nhelmet.hpkp = deprecate.function(__webpack_require__(/*! hpkp */ \"./node_modules/hpkp/index.js\"), 'helmet.hpkp is deprecated and will be removed in helmet@4. You can use the `hpkp` module instead. For more, see https://github.com/helmetjs/helmet/issues/180.')\n\nmiddlewares = Object.keys(helmet)\n\nmodule.exports = helmet\n\n\n//# sourceURL=webpack:///./node_modules/helmet/index.js?");

/***/ }),

/***/ "./node_modules/hide-powered-by/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hide-powered-by/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function hidePoweredBy(options) {\n    var _a = (options || {}).setTo, setTo = _a === void 0 ? null : _a;\n    if (setTo) {\n        return function hidePoweredBy(_req, res, next) {\n            res.setHeader('X-Powered-By', setTo);\n            next();\n        };\n    }\n    else {\n        return function hidePoweredBy(_req, res, next) {\n            res.removeHeader('X-Powered-By');\n            next();\n        };\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/hide-powered-by/dist/index.js?");

/***/ }),

/***/ "./node_modules/hpkp/index.js":
/*!************************************!*\
  !*** ./node_modules/hpkp/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var badArgumentsError = new Error('hpkp must be called with a maxAge and at least two SHA-256s (one actually used and another kept as a backup).')\n\nmodule.exports = function hpkp (passedOptions) {\n  var options = parseOptions(passedOptions)\n  var headerKey = getHeaderKey(options)\n  var headerValue = getHeaderValue(options)\n\n  return function hpkp (req, res, next) {\n    var setHeader = true\n    var setIf = options.setIf\n\n    if (setIf) {\n      setHeader = setIf(req, res)\n    }\n\n    if (setHeader) {\n      res.setHeader(headerKey, headerValue)\n    }\n\n    next()\n  }\n}\n\nfunction parseOptions (options) {\n  if (!options) { throw badArgumentsError }\n\n  if (options.maxage && options.maxAge) { throw badArgumentsError }\n\n  var maxAge = options.maxAge\n  var sha256s = options.sha256s\n  var setIf = options.setIf\n\n  if (!maxAge || maxAge <= 0) { throw badArgumentsError }\n  if (!sha256s || sha256s.length < 2) { throw badArgumentsError }\n  if (setIf && (typeof setIf !== 'function')) {\n    throw new TypeError('setIf must be a function.')\n  }\n\n  if (options.reportOnly && !options.reportUri) { throw badArgumentsError }\n\n  return {\n    maxAge: maxAge,\n    sha256s: sha256s,\n    includeSubDomains: options.includeSubDomains || options.includeSubdomains,\n    reportUri: options.reportUri,\n    reportOnly: options.reportOnly,\n    setIf: setIf\n  }\n}\n\nfunction getHeaderKey (options) {\n  var header = 'Public-Key-Pins'\n  if (options.reportOnly) {\n    header += '-Report-Only'\n  }\n  return header\n}\n\nfunction getHeaderValue (options) {\n  var result = options.sha256s.map(function (sha) {\n    return 'pin-sha256=\"' + sha + '\"'\n  })\n  result.push('max-age=' + Math.round(options.maxAge))\n  if (options.includeSubDomains) {\n    result.push('includeSubDomains')\n  }\n  if (options.reportUri) {\n    result.push('report-uri=\"' + options.reportUri + '\"')\n  }\n  return result.join('; ')\n}\n\n\n//# sourceURL=webpack:///./node_modules/hpkp/index.js?");

/***/ }),

/***/ "./node_modules/hsts/index.js":
/*!************************************!*\
  !*** ./node_modules/hsts/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deprecate = __webpack_require__(/*! depd */ \"depd\")('hsts')\n\nvar DEFAULT_MAX_AGE = 180 * 24 * 60 * 60\n\nmodule.exports = function hsts (options) {\n  options = options || {}\n\n  if ('includeSubdomains' in options) {\n    deprecate('The \"includeSubdomains\" parameter is deprecated. Use \"includeSubDomains\" (with a capital D) instead.')\n  }\n\n  if ('setIf' in options) {\n    deprecate('The \"setIf\" parameter is deprecated. Refer to the documentation to see how to set the header conditionally.')\n  }\n\n  var maxAge = options.maxAge != null ? options.maxAge : DEFAULT_MAX_AGE\n  var includeSubDomains = (options.includeSubDomains !== false) && (options.includeSubdomains !== false)\n  var setIf = options.hasOwnProperty('setIf') ? options.setIf : alwaysTrue\n\n  if (options.hasOwnProperty('maxage')) {\n    throw new Error('maxage is not a supported property. Did you mean to pass \"maxAge\" instead of \"maxage\"?')\n  }\n  if (arguments.length > 1) {\n    throw new Error('HSTS passed the wrong number of arguments.')\n  }\n  if (typeof maxAge !== 'number') {\n    throw new TypeError('HSTS must be passed a numeric maxAge parameter.')\n  }\n  if (maxAge < 0) {\n    throw new RangeError('HSTS maxAge must be nonnegative.')\n  }\n  if (typeof setIf !== 'function') {\n    throw new TypeError('setIf must be a function.')\n  }\n  if (options.hasOwnProperty('includeSubDomains') && options.hasOwnProperty('includeSubdomains')) {\n    throw new Error('includeSubDomains and includeSubdomains cannot both be specified.')\n  }\n\n  var header = 'max-age=' + Math.round(maxAge)\n  if (includeSubDomains) {\n    header += '; includeSubDomains'\n  }\n  if (options.preload) {\n    header += '; preload'\n  }\n\n  return function hsts (req, res, next) {\n    if (setIf(req, res)) {\n      res.setHeader('Strict-Transport-Security', header)\n    }\n\n    next()\n  }\n}\n\nfunction alwaysTrue () {\n  return true\n}\n\n\n//# sourceURL=webpack:///./node_modules/hsts/index.js?");

/***/ }),

/***/ "./node_modules/ienoopen/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ienoopen/dist/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function ienoopen() {\n    return function ienoopen(req, res, next) {\n        res.setHeader('X-Download-Options', 'noopen');\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/ienoopen/dist/index.js?");

/***/ }),

/***/ "./node_modules/nocache/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/nocache/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function nocache() {\n    return function nocache(_req, res, next) {\n        res.setHeader('Surrogate-Control', 'no-store');\n        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');\n        res.setHeader('Pragma', 'no-cache');\n        res.setHeader('Expires', '0');\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/nocache/dist/index.js?");

/***/ }),

/***/ "./node_modules/referrer-policy/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/referrer-policy/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction getHeaderValueFromOptions(options) {\n    var DEFAULT_POLICY = 'no-referrer';\n    var ALLOWED_POLICIES = [\n        'no-referrer',\n        'no-referrer-when-downgrade',\n        'same-origin',\n        'origin',\n        'strict-origin',\n        'origin-when-cross-origin',\n        'strict-origin-when-cross-origin',\n        'unsafe-url',\n        ''\n    ];\n    options = options || {};\n    var policyOption;\n    if ('policy' in options) {\n        policyOption = options.policy;\n    }\n    else {\n        policyOption = DEFAULT_POLICY;\n    }\n    var policies = Array.isArray(policyOption) ? policyOption : [policyOption];\n    if (policies.length === 0) {\n        throw new Error('At least one policy must be supplied.');\n    }\n    var policiesSeen = new Set();\n    policies.forEach(function (policy) {\n        if ((typeof policy !== 'string') || (ALLOWED_POLICIES.indexOf(policy) === -1)) {\n            var allowedPoliciesErrorList = ALLOWED_POLICIES.map(function (policy) {\n                if (policy.length) {\n                    return \"\\\"\" + policy + \"\\\"\";\n                }\n                else {\n                    return 'and the empty string';\n                }\n            }).join(', ');\n            throw new Error(\"\\\"\" + policy + \"\\\" is not a valid policy. Allowed policies: \" + allowedPoliciesErrorList + \".\");\n        }\n        if (policiesSeen.has(policy)) {\n            throw new Error(\"\\\"\" + policy + \"\\\" specified more than once. No duplicates are allowed.\");\n        }\n        policiesSeen.add(policy);\n    });\n    return policies.join(',');\n}\nmodule.exports = function referrerPolicy(options) {\n    var headerValue = getHeaderValueFromOptions(options);\n    return function referrerPolicy(_req, res, next) {\n        res.setHeader('Referrer-Policy', headerValue);\n        next();\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/referrer-policy/dist/index.js?");

/***/ }),

/***/ "./node_modules/x-xss-protection/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/x-xss-protection/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction doesUserAgentMatchOldInternetExplorer(userAgent) {\n    if (!userAgent) {\n        return false;\n    }\n    var matches = /msie\\s*(\\d{1,2})/i.exec(userAgent);\n    return matches ? parseFloat(matches[1]) < 9 : false;\n}\nfunction getHeaderValueFromOptions(options) {\n    var directives = ['1'];\n    var isBlockMode;\n    if ('mode' in options) {\n        if (options.mode === 'block') {\n            isBlockMode = true;\n        }\n        else if (options.mode === null) {\n            isBlockMode = false;\n        }\n        else {\n            throw new Error('The `mode` option must be set to \"block\" or null.');\n        }\n    }\n    else {\n        isBlockMode = true;\n    }\n    if (isBlockMode) {\n        directives.push('mode=block');\n    }\n    if (options.reportUri) {\n        directives.push(\"report=\" + options.reportUri);\n    }\n    return directives.join('; ');\n}\nmodule.exports = function xXssProtection(options) {\n    if (options === void 0) { options = {}; }\n    var headerValue = getHeaderValueFromOptions(options);\n    if (options.setOnOldIE) {\n        return function xXssProtection(_req, res, next) {\n            res.setHeader('X-XSS-Protection', headerValue);\n            next();\n        };\n    }\n    else {\n        return function xXssProtection(req, res, next) {\n            var value = doesUserAgentMatchOldInternetExplorer(req.headers['user-agent']) ? '0' : headerValue;\n            res.setHeader('X-XSS-Protection', value);\n            next();\n        };\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/x-xss-protection/dist/index.js?");

/***/ }),

/***/ "./routes/api.js":
/*!***********************!*\
  !*** ./routes/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth */ \"./routes/api/auth.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./routes/api/posts.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(\"/auth\", _api_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(\"/posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api.js?");

/***/ }),

/***/ "./routes/api/auth.js":
/*!****************************!*\
  !*** ./routes/api/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/myCrypto */ \"./core/myCrypto.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/consts */ \"./core/consts.js\");\n\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst signInProc = async (req, res, next) => {\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lang);\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][lang];\n  const {\n    email,\n    password\n  } = req.body;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailIsNotRegistered\n      });\n      return;\n    }\n\n    const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email, hash);\n    rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.passwordIsIncorrect\n      });\n      return;\n    }\n\n    const user = rows[0];\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      id: user[\"id\"],\n      email: user[\"email\"],\n      firstName: user[\"firstName\"],\n      lastName: user[\"lastName\"]\n    }, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"session\"].secret);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySignedIn,\n      data: {\n        user,\n        token\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst signUpProc = async (req, res, next) => {\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lang);\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][lang];\n  const {\n    email,\n    password,\n    username,\n    firstName,\n    lastName,\n    gender,\n    birthday,\n    jobTitle,\n    sector,\n    company,\n    city,\n    phone\n  } = req.body;\n  const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length > 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailAlreadyRegistered\n      });\n      return;\n    }\n\n    const newRows = [[null, email, hash, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone, 0, 0]];\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ?;\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users);\n    await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, [newRows]); // sendVerificationEmail(email);\n\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyRegistered\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post(\"/sign-in\", signInProc);\nrouter.post(\"/sign-up\", signUpProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/auth.js?");

/***/ }),

/***/ "./routes/api/posts.js":
/*!*****************************!*\
  !*** ./routes/api/posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ \"dateformat\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/consts */ \"./core/consts.js\");\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst listProc = async (req, res, next) => {\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].lang) || _core_consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaultLanguage;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_5__[\"default\"][lang];\n  let {\n    page,\n    pageSize,\n    userId\n  } = req.body;\n  page || (page = 1);\n  pageSize || (pageSize = _core_consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaultPageSize);\n  const start = pageSize * (page - 1);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.deletedDate = '%s' AND P.userId LIKE '%s' ORDER BY P.timestamp DESC LIMIT %d, %d;\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].posts, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, \"\", userId || \"%%\", start, pageSize);\n  _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].debug(req.headers['x-forwarded-for'], req.connection.remoteAddress);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = '%s' AND `userId` LIKE '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].posts, \"\", userId || \"%%\");\n    let count = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n    let pageCount = 0;\n    count.length > 0 && (pageCount = Math.ceil(count[0]['count'] / pageSize));\n    res.status(200).send({\n      result: langs.success,\n      count: count[0]['count'],\n      pageCount,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst saveProc = async (req, res, next) => {\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].lang) || _core_consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaultLanguage;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_5__[\"default\"][lang];\n  const {\n    id,\n    title,\n    description,\n    media,\n    userId\n  } = req.body;\n  const today = new Date();\n  const date = dateformat__WEBPACK_IMPORTED_MODULE_2___default()(today, \"yyyy-mm-dd\");\n  const time = dateformat__WEBPACK_IMPORTED_MODULE_2___default()(today, \"hh:MM TT\");\n  const timestamp = today.getTime();\n  const newRows = [[id || null, timestamp, userId, date, time, title, description, media, '']];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`);\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].posts);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, [newRows]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySaved,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post(\"/list\", listProc);\nrouter.post(\"/save\", saveProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/posts.js?");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cluster\");\n\n//# sourceURL=webpack:///external_%22cluster%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dateformat\");\n\n//# sourceURL=webpack:///external_%22dateformat%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"depd\");\n\n//# sourceURL=webpack:///external_%22depd%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql2\");\n\n//# sourceURL=webpack:///external_%22mysql2%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sprintf-js":
/*!*****************************!*\
  !*** external "sprintf-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sprintf-js\");\n\n//# sourceURL=webpack:///external_%22sprintf-js%22?");

/***/ }),

/***/ "tracer":
/*!*************************!*\
  !*** external "tracer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tracer\");\n\n//# sourceURL=webpack:///external_%22tracer%22?");

/***/ })

/******/ });