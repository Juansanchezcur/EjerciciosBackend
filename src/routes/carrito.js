const { Router } = require("express");
const {
  borrarProductoDelCarrito,
  confirmarCarrito,
  nuevoCarrito,
  productosDelCarrito,
  agregarProductoAlCarrito,
  borrarCarrito,
} = require("../controllers/carrito.controller");
const rutaCarrito = Router();

rutaCarrito.post("/", nuevoCarrito);

rutaCarrito.get("/:id/productos", productosDelCarrito);

rutaCarrito.post("/:id_carrito/productos/:id_prod", agregarProductoAlCarrito);

rutaCarrito.delete("/:id", borrarCarrito);

rutaCarrito.delete("/:id_carrito/productos/:id_prod", borrarProductoDelCarrito);

rutaCarrito.post("/:id_carrito/confirmar", confirmarCarrito);

module.exports = rutaCarrito;
