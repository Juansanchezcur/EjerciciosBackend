"use strict";

var _require = require("express"),
  Router = _require.Router;
var ProductosRouter = require("./productos");
var CarritoRouter = require("./carrito");
var rutaPrincipal = Router();
rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
module.exports = rutaPrincipal;