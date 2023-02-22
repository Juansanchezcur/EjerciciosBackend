"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpsEjemplo2 = void 0;
var _https = _interopRequireDefault(require("https"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var options = {
  method: 'POST',
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  headers: {
    'Content-Type': 'application/json'
  }
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
var postData = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});
var httpsEjemplo2 = function httpsEjemplo2() {
  req.write(postData);
  req.end();
};
exports.httpsEjemplo2 = httpsEjemplo2;