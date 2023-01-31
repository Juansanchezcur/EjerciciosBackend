"use strict";

var _expressSession = _interopRequireDefault(require("express-session"));
var _passport = _interopRequireDefault(require("passport"));
var _auth = require("./auth.js");
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require("express");
require("dotenv").config();
var RouterPrincipal = require("../routes/index");
var logger = require("../utils/logger");
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]("public"));
var ttlSeconds = 300;
var StoreOptions = {
  store: _connectMongo["default"].create({
    mongoUrl: process.env.MONGO_ATLAS
  }),
  secret: "secretString",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000
  }
};
app.use((0, _expressSession["default"])(StoreOptions));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use(function (req, res, next) {
  logger.info("\n      M\xE9todo= ".concat(req.method, ", Ruta= ").concat(req.path)), next();
});
_passport["default"].use("login", _auth.loginFunc);
_passport["default"].use("signup", _auth.signUpFunc);
app.use("/api", RouterPrincipal);
app.use(function (err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send({
    msg: "Tuvimos un problema"
  });
});
module.exports = app;