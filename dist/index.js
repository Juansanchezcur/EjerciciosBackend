"use strict";

var server = require("./services/server");
var puerto = process.env.PORT || 8080;
server.listen(puerto, function () {
  console.log("Servidor Listo escuchando en el puerto ".concat(puerto));
});