"use strict";

var _require = require("express"),
  Router = _require.Router;
var ProductosRouter = require("./productos");
var CarritoRouter = require("./carrito");
var rutaPrincipal = Router();
rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
rutaPrincipal.use(function (req, res) {
  res.json({
    msg: "Error: Metodo o ruta no v\xE1lidos"
  });
});
module.exports = rutaPrincipal;