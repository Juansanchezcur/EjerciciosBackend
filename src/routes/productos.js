const { Router } = require("express");
const {
  listarProductos,
  buscarProductoPorId,
  nuevoProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/products.controller");

const rutaProductos = Router();

rutaProductos.get("/", listarProductos);

rutaProductos.get("/:id", buscarProductoPorId);

rutaProductos.post("/", nuevoProducto);

rutaProductos.put("/:id", actualizarProducto);

rutaProductos.delete("/:id", eliminarProducto);

module.exports = rutaProductos;
