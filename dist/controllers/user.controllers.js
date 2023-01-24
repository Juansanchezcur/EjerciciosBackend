"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.login = exports.getHome = void 0;
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var passportOptions = {
  badRequestMessage: 'falta username / password'
};
var signUp = function signUp(req, res, next) {
  _passport["default"].authenticate('signup', passportOptions, function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);
    res.json({
      msg: 'signup OK'
    });
  })(req, res, next);
};
exports.signUp = signUp;
var login = function login(req, res) {
  res.json({
    msg: 'Welcome!',
    user: req.user
  });
};
exports.login = login;
var getHome = function getHome(req, res) {
  res.json(req.session);
};
exports.getHome = getHome;