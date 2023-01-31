"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twilioClient = void 0;
var _twilio = _interopRequireDefault(require("twilio"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var twilioClient = (0, _twilio["default"])(process.env.SID, process.env.TOKEN);
exports.twilioClient = twilioClient;