"use strict";

var _winston = _interopRequireDefault(require("winston"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//LOGS

var createLogger = _winston["default"].createLogger,
  format = _winston["default"].format,
  transports = _winston["default"].transports;
var combine = format.combine,
  printf = format.printf,
  timestamp = format.timestamp,
  colorize = format.colorize;
var logConfiguration = {
  format: combine(timestamp({
    format: "MMM-DD-YYYY HH:mm:ss"
  }), colorize(), printf(function (info) {
    return "".concat(info.level, " | ").concat([info.timestamp], " | ").concat(info.message);
  })),
  transports: [new transports.Console({
    level: "info"
  }),, new transports.File({
    filename: "./logs/warn.log",
    level: "warn"
  }), new transports.File({
    filename: "./logs/error.log",
    level: "error"
  })]
};
var logger = createLogger(logConfiguration);
module.exports = logger;