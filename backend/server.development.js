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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/api */ \"./routes/api.js\");\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst cwd = process.cwd(); // view engine setup\n\napp.set('views', path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'views'));\napp.set('view engine', 'pug');\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\n true && app.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/assets', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'assets')));\napp.use('/api', _routes_api__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'frontend')));\napp.get('*', (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'frontend/index.html'));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/start-webapp.js":
/*!*****************************!*\
  !*** ./bin/start-webapp.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ \"cluster\");\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/config */ \"./core/config.js\");\n\n\n\n\n\n\n\nlet debug;\nlet port;\nlet sslPort;\nlet httpServer;\nlet httpsServer;\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isMaster) {\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.on('exit', function (worker, code, signal) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  });\n}\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isWorker) {\n  debug = new debug__WEBPACK_IMPORTED_MODULE_1___default.a('express:server');\n  port = normalizePort(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].port);\n  sslPort = normalizePort(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslPort);\n  _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('port', port);\n  httpServer = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpServer.listen(port);\n  httpServer.on('error', onError);\n  httpServer.on('listening', onListening);\n  const credentials = {\n    key: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslKey),\n    cert: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCert),\n    ca: [fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(_core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCA)],\n    passphrase: 'abc123'\n  };\n  httpsServer = https__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(credentials, _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpsServer.listen(sslPort);\n  httpsServer.on('error', onError);\n  httpsServer.on('listening', onSslListening);\n}\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  const addr = httpServer.address();\n  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n  console.log('Listening on ' + bind);\n}\n\nfunction onSslListening() {\n  const addr = httpsServer.address();\n  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n  console.log('Listening on ' + bind);\n}\n\n//# sourceURL=webpack:///./bin/start-webapp.js?");

/***/ }),

/***/ "./core/config.js":
/*!************************!*\
  !*** ./core/config.js ***!
  \************************/
/*! exports provided: server, mysql, session, dbTblName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"session\", function() { return session; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbTblName\", function() { return dbTblName; });\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config();\n\nconst server = {\n  isDev: false,\n  port: process.env.HTTP_PORT,\n  sslPort: process.env.HTTPS_PORT,\n  baseUrl: process.env.BASE_URL,\n  name: 'hrgulf.org',\n  description: 'Portal in hrgulf.org',\n  author: 'Zhenlong J.',\n  secret: 'hrgulf@@',\n  sslKey: './sslcert/server.key',\n  sslCert: './sslcert/1e720c418ffe9875.crt',\n  sslCA: './sslcert/gd_bundle-g2-g1.crt',\n  environment: \"development\"\n};\nconst mysql = {\n  connectionLimit: 10,\n  host: process.env.MYSQL_HOST,\n  port: process.env.MYSQL_PORT,\n  user: process.env.MYSQL_USER,\n  password: process.env.MYSQL_PASSWORD,\n  database: process.env.MYSQL_DATABASE\n};\nconst session = {\n  name: 'hrgulf.org',\n  key: 'hrgulf.org',\n  secret: 'hrgulf.org@@',\n  secretAdmin: 'hrgulf.org_admin@@'\n};\nconst dbTblName = {\n  users: 'users'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server,\n  mysql,\n  session,\n  dbTblName\n});\n\n//# sourceURL=webpack:///./core/config.js?");

/***/ }),

/***/ "./core/consts.js":
/*!************************!*\
  !*** ./core/consts.js ***!
  \************************/
/*! exports provided: uploadPath, success, error, lang, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadPath\", function() { return uploadPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lang\", function() { return lang; });\nconst uploadPath = {\n  mediaSlider: '/uploads/media-slider'\n};\nconst success = 'success';\nconst error = 'error';\nconst lang = 'lang';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  uploadPath,\n  success,\n  error,\n  lang\n});\n\n//# sourceURL=webpack:///./core/consts.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: 'success',\n  error: 'danger',\n  unknownServerError: 'خطأ غير معروف في الخادم',\n  emailAlreadyRegistered: 'عنوان البريد الإلكترونى هذا مسجل بالفعل.',\n  usernameAlreadyRegistered: 'وسجلت بالفعل اسم المستخدم هذا.',\n  // successfullyRegistered: 'Successfully registered. Please activate your account by validation email.',\n  successfullyRegistered: 'سجلت بنجاح. يرجى محاولة تسجيل الدخول.',\n  emailIsIncorrect: 'البريد الالكتروني غير صحيح.',\n  emailIsNotRegistered: 'البريد الإلكتروني غير مسجل',\n  usernameIsIncorrect: 'اسم المستخدم غير صحيح',\n  passwordIsIncorrect: 'كلمة المرور غير صحيحة',\n  yourAccountIsNotAllowed: 'حسابك غير مسموح به. يرجى الاتصال المشرف.',\n  successfullySignedIn: 'تم تسجيل الدخول بنجاح',\n  successfullySignedOut: 'تم تسجيل الخروج بنجاح',\n  error404: 'لم يتم العثور على',\n  error500: 'خطأ غير معروف في الخادم',\n  successfullySaved: 'حفظ بنجاح',\n  successfullyAdded: 'أضيف بنجاح',\n  successfullyEdited: 'تم التعديل بنجاح',\n  successfullyChanged: 'تغيرت بنجاح',\n  successfullyDeleted: 'تم الحذف بنجاح',\n  successfullyReset: 'إعادة تعيين بنجاح',\n  currentPasswordIncorrect: 'كلمة المرور الحالية غير صحيحة.',\n  failedDueToUnknownServerError: 'فشل بسبب خطأ غير معروف في الخادم',\n  invalidParameters: 'معلمات غير صالحة',\n  notUploaded: 'لم يتم الرفع',\n  notFound: 'لم يتم العثور على',\n  successfullyUploaded: 'تم الرفع بنجاح',\n  successfullyPosted: 'تم النشر بنجاح',\n  successfullyJoined: 'تم التسجيل بنجاح',\n  youHaveAlreadyJoined: 'لقد انضممت بالفعل',\n  successfullySent: 'أرسلت بنجاح',\n  invalidHash: 'توقيعك غير صالح.',\n  invalidUser: 'معلوماتك غير صالحة.',\n  notRegistered: 'انت لم تسجل.'\n});\n\n//# sourceURL=webpack:///./core/i18n/ar.js?");

/***/ }),

/***/ "./core/i18n/en.js":
/*!*************************!*\
  !*** ./core/i18n/en.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: 'success',\n  error: 'danger',\n  unknownServerError: 'Unknown server error',\n  emailAlreadyRegistered: 'This email is already registered.',\n  usernameAlreadyRegistered: 'This username is already registered.',\n  // successfullyRegistered: 'Successfully registered. Please activate your account by validation email.',\n  successfullyRegistered: 'Successfully registered. Please try to sign in.',\n  emailIsIncorrect: 'Email is incorrect.',\n  emailIsNotRegistered: 'Email is not registered.',\n  usernameIsIncorrect: 'Username is incorrect',\n  passwordIsIncorrect: 'Password is incorrect',\n  yourAccountIsNotAllowed: 'Your account is not allowed. Please contact admin.',\n  successfullySignedIn: 'Successfully signed in',\n  successfullySignedOut: 'Successfully signed out',\n  error404: 'Not Fount',\n  error500: 'Unknown server error',\n  successfullySaved: 'Successfully saved',\n  successfullyAdded: 'Successfully added',\n  successfullyEdited: 'Successfully edited',\n  successfullyChanged: 'Successfully changed',\n  successfullyDeleted: 'Successfully Deleted',\n  successfullyReset: 'Successfully Reset',\n  currentPasswordIncorrect: 'Current password is incorrect.',\n  failedDueToUnknownServerError: 'Failed due to unknown server error',\n  invalidParameters: 'Invalid Parameters',\n  notUploaded: 'Not uploaded',\n  notFound: 'Not Found',\n  successfullyUploaded: 'Successfully uploaded',\n  successfullyPosted: 'Successfully posted',\n  successfullyJoined: 'Successfully joined',\n  youHaveAlreadyJoined: 'You have already joined.',\n  successfullySent: 'Successfully sent',\n  invalidHash: 'Your signature is invalid.',\n  invalidUser: 'Your information is invalid.',\n  notRegistered: 'You are not registered.'\n});\n\n//# sourceURL=webpack:///./core/i18n/en.js?");

/***/ }),

/***/ "./core/myCrypto.js":
/*!**************************!*\
  !*** ./core/myCrypto.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hmacHex: plain => {\n    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha256', _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].server.secret).update(plain).digest('hex'); // console.log('signMessage', plain, cipher);\n\n    return cipher;\n  }\n});\n\n//# sourceURL=webpack:///./core/myCrypto.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tracer */ \"tracer\");\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tracer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tracer__WEBPACK_IMPORTED_MODULE_0___default.a.colorConsole());\n\n//# sourceURL=webpack:///./core/tracer.js?");

/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\n|\\r|\\r\\n/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = options.path\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack:///./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./routes/api.js":
/*!***********************!*\
  !*** ./routes/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth */ \"./routes/api/auth.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/auth', _api_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api.js?");

/***/ }),

/***/ "./routes/api/auth.js":
/*!****************************!*\
  !*** ./routes/api/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/myCrypto */ \"./core/myCrypto.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/consts */ \"./core/consts.js\");\n\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst signInProc = async (req, res, next) => {\n  const params = req.body;\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lang);\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][lang];\n  const {\n    email,\n    password\n  } = params;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailIsNotRegistered\n      });\n      return;\n    }\n\n    const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email, hash);\n    rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.passwordIsIncorrect\n      });\n      return;\n    }\n\n    let data = rows[0];\n    data['token'] = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      id: data['id'],\n      email: data['email'],\n      firstName: data['firstName'],\n      lastName: data['lastName']\n    }, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"session\"].secret);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySignedIn,\n      data\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst signUpProc = async (req, res, next) => {\n  const params = req.body;\n  const lang = req.get(_core_consts__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lang);\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][lang];\n  const {\n    email,\n    password,\n    username,\n    firstName,\n    lastName,\n    gender,\n    birthday,\n    jobTitle,\n    sector,\n    company,\n    city,\n    phone\n  } = params;\n  const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length > 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailAlreadyRegistered\n      });\n      return;\n    }\n\n    const newRows = [[null, email, hash, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone, 0, 0]];\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ?;\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users);\n    await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, [newRows]); // sendVerificationEmail(email);\n\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyRegistered\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post('/sign-in', signInProc);\nrouter.post('/sign-up', signUpProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/auth.js?");

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

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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