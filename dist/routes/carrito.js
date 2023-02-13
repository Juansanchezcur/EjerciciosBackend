"use strict";

var _require = require("express"),
  Router = _require.Router;
var _require2 = require("../controllers/carrito.controller"),
  borrarProductoDelCarrito = _require2.borrarProductoDelCarrito,
  confirmarCarrito = _require2.confirmarCarrito,
  nuevoCarrito = _require2.nuevoCarrito,
  productosDelCarrito = _require2.productosDelCarrito,
  agregarProductoAlCarrito = _require2.agregarProductoAlCarrito,
  borrarCarrito = _require2.borrarCarrito;
var rutaCarrito = Router();
rutaCarrito.post("/", nuevoCarrito);
rutaCarrito.get("/:id/productos", productosDelCarrito);
rutaCarrito.post("/:id_carrito/productos/:id_prod", agregarProductoAlCarrito);
rutaCarrito["delete"]("/:id", borrarCarrito);
rutaCarrito["delete"]("/:id_carrito/productos/:id_prod", borrarProductoDelCarrito);
rutaCarrito.post("/:id_carrito/confirmar", confirmarCarrito);
module.exports = rutaCarrito;