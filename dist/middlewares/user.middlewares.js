"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoggedIn = void 0;
var isLoggedIn = function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) return res.status(401).json({
    msg: 'Unauthorized'
  });
  next();
};
exports.isLoggedIn = isLoggedIn;