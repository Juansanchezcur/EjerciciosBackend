"use strict";

var randoms = function randoms(q) {
  var data = {};
  for (var i = 0; i < q; i++) {
    var num = Math.floor(Math.random() * (1000 - 1) + 1);
    if (data[num]) {
      data[num] += 1;
    } else {
      data[num] = 1;
    }
  }
  return data;
};
process.on("message", function (cantidad) {
  console.log(cantidad);
  console.log("Start calculo");
  var resultado = randoms(cantidad);
  process.send(resultado);
});
module.exports = randoms;