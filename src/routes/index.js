const { Router } = require("express");
const logger = require("../utils/logger");
const ProductosRouter = require("./productos");
const CarritoRouter = require("./carrito");
const UsuarioRouter = require("./usuarios");
const ProcessRouter = require("./proceso");

const rutaPrincipal = Router();

rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
rutaPrincipal.use("/usuarios", UsuarioRouter);
rutaPrincipal.use("/proceso", ProcessRouter);

rutaPrincipal.use((req, res) => {
  logger.warn(
    `Error: Método o ruta no válidos: \n Método= ${req.method}, Ruta= ${req.path}}`
  );
  res.json({
    msg: `Error: Metodo o ruta no válidos`,
  });
});

module.exports = rutaPrincipal;
