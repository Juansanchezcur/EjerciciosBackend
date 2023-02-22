"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpsEjemplo3 = void 0;
var _https = _interopRequireDefault(require("https"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var options = {
  method: 'DELETE',
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  headers: {},
  maxRedirects: 20
};
var req = _https["default"].request(options, function (res) {
  var chunks = [];
  res.on('data', function (chunk) {
    chunks.push(chunk);
  });
  res.on('end', function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
  res.on('error', function (error) {
    console.error(error);
  });
});
var httpsEjemplo3 = function httpsEjemplo3() {
  return req.end();
};
exports.httpsEjemplo3 = httpsEjemplo3;