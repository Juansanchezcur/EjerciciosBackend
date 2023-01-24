"use strict";

var _passport = _interopRequireDefault(require("passport"));
var _express = require("express");
var _userControllers = require("../controllers/user.controllers.js");
var _userMiddlewares = require("../middlewares/user.middlewares.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rutaUsuarios = (0, _express.Router)();
var passportOptions = {
  badRequestMessage: "falta username / password"
};
rutaUsuarios.post("/signup", _userControllers.signUp);
rutaUsuarios.post("/login", _passport["default"].authenticate("login", passportOptions), _userControllers.login);
rutaUsuarios.get("/home", _userMiddlewares.isLoggedIn, _userControllers.getHome);
module.exports = rutaUsuarios;