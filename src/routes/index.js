const { Router } = require("express");

const ProductosRouter = require("./productos");
const CarritoRouter = require("./carrito");
const UsuarioRouter = require("./usuarios");

const rutaPrincipal = Router();

rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
rutaPrincipal.use("/usuarios", UsuarioRouter);

rutaPrincipal.use((req, res) => {
  res.json({
    msg: `Error: Metodo o ruta no válidos`,
  });
});

module.exports = rutaPrincipal;
