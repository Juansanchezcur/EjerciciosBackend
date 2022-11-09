const { Router } = require("express");

const ProductosRouter = require("./productos");
const CarritoRouter = require("./carrito");

const rutaPrincipal = Router();

rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);

rutaPrincipal.use((req, res) => {
  res.json({
    msg: `Error: Metodo o ruta no válidos`,
  });
});

module.exports = rutaPrincipal;
