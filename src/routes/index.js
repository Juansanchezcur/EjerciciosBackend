const { Router } = require("express");
const TestRouter = require("./test");
const ProductosRouter = require("./productos");
const CarritoRouter = require("./carrito");
const MessagesRouter = require("./messages");

const rutaPrincipal = Router();

rutaPrincipal.use("/productos", ProductosRouter);
rutaPrincipal.use("/carrito", CarritoRouter);
rutaPrincipal.use("/test", TestRouter);
rutaPrincipal.use("/messages", MessagesRouter);

rutaPrincipal.use((req, res) => {
  res.json({
    msg: `Error: Metodo o ruta no válidos`,
  });
});

module.exports = rutaPrincipal;
