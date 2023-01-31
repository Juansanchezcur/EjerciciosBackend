"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = exports.message = void 0;
var _nodemailer = require("nodemailer");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var transporter = (0, _nodemailer.createTransport)({
  host: process.env.HOST,
  port: process.env.PORT_ETHEREAL,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
exports.transporter = transporter;
var message = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Tenemos un nuevo registro"
};
exports.message = message;