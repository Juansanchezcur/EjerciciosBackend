"use strict";

var _require = require("express"),
  Router = _require.Router;
var _require2 = require("../controllers/products.controller"),
  listarProductos = _require2.listarProductos,
  buscarProductoPorId = _require2.buscarProductoPorId,
  nuevoProducto = _require2.nuevoProducto,
  actualizarProducto = _require2.actualizarProducto,
  eliminarProducto = _require2.eliminarProducto;
var rutaProductos = Router();
rutaProductos.get("/", listarProductos);
rutaProductos.get("/:id", buscarProductoPorId);
rutaProductos.post("/", nuevoProducto);
rutaProductos.put("/:id", actualizarProducto);
rutaProductos["delete"]("/:id", eliminarProducto);
module.exports = rutaProductos;