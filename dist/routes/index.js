"use strict";

var _require = require("express"),
  Router = _require.Router;
var ProductosRouter = require("./productos");
var CarritoRouter = require("./carrito");
var UsuarioRouter = require("./usuarios");
var ProcessRouter = require("./proceso");
var rutaPrincipal = Router();
rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
rutaPrincipal.use("/usuarios", UsuarioRouter);
rutaPrincipal.use("/proceso", ProcessRouter);
rutaPrincipal.use(function (req, res) {
  res.json({
    msg: "Error: Metodo o ruta no v\xE1lidos"
  });
});
module.exports = rutaPrincipal;