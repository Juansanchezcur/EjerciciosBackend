const moment = require("moment");
const path = require("path");
const { Router } = require("express");
const { administrador } = require("../../src/config/index");
const fs = require("fs");
const fileName = "./productos.json";
const { v4: uuidv4 } = require("uuid");

const rutaProductos = Router();

rutaProductos.get("/", async (req, res) => {
  const productos = await JSON.parse(await fs.promises.readFile(fileName));
  res.json({
    productos: productos,
  });
});

rutaProductos.get("/:id", async (req, res) => {
  const productos = await JSON.parse(await fs.promises.readFile(fileName));
  const id = req.params.id;

  const indice = productos.findIndex((unProducto) => unProducto.id == id);

  if (indice < 0) {
    return res.status(404).json({
      msg: "error, producto no encontrado",
    });
  }

  res.json({
    msg: `devolviendo el producto con id ${id}`,
    producto: productos[indice],
  });
});

rutaProductos.post("/", async (req, res) => {
  if (administrador) {
    const productos = await JSON.parse(await fs.promises.readFile(fileName));
    const { name, description, photo, price, stock } = req.body;
    console.log(req.body);
    if (!name || !price || !description || !photo || !price || !stock) {
      return res.status(400).json({
        msg: "Por favor, verifica los datos ",
      });
    }

    const nuevoProducto = {
      id: uuidv4(),
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      name,
      description,
      code: uuidv4(),
      photo,
      price,
      stock,
    };
    console.log("nuevo Producto: " + nuevoProducto);
    productos.push(nuevoProducto);

    const productosString = JSON.stringify(productos, null, "\t");
    await fs.promises.writeFile(fileName, productosString);

    res.json({
      msg: "Producto guardado con Éxito",
      producto: nuevoProducto,
    });
  }
  res.status(403).send({
    error: `Ruta: http://localhost:8080/api/productos Metodo: Post no autorizada`,
  });
});
rutaProductos.put("/:id", async (req, res) => {
  if (administrador) {
    const productos = await JSON.parse(await fs.promises.readFile(fileName));
    const id = req.params.id;
    const { name, description, photo, price, stock } = req.body;

    const indice = productos.findIndex((unProducto) => unProducto.id == id);

    if (indice < 0) {
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }

    if (!name || !price || !description || !photo || !price || !stock) {
      return res.status(400).json({
        msg: "Por favor verifica los datos ingresados",
      });
    }

    const productoActualizado = {
      id: productos[indice].id,
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      name,
      description,
      code: productos[indice].code,
      photo,
      price,
      stock,
    };

    productos.splice(indice, 1, productoActualizado);
    const productosString = JSON.stringify(productos, null, "\t");
    await fs.promises.writeFile(fileName, productosString);

    res.json({
      msg: `Producto con id: ${id} modificado correctamente`,
      producto: productoActualizado,
    });
  }
  res.status(403).send({
    error: `Ruta: http://localhost:8080/api/productos/id Metodo: PUT no autorizada`,
  });
});

rutaProductos.delete("/:id", async (req, res) => {
  if (administrador) {
    const productos = await JSON.parse(await fs.promises.readFile(fileName));
    const id = req.params.id;
    const indice = productos.filter((unProducto) => unProducto.id == id);

    productos.splice(indice, 1);

    const productosString = JSON.stringify(productos, null, "\t");
    await fs.promises.writeFile(fileName, productosString);

    res.json({
      msg: `Borrando producto con id ${id}`,
    });
  }
  res.status(403).send({
    error: `Ruta: http://localhost:8080/api/productos/id Metodo: Delete no autorizada`,
  });
});

module.exports = rutaProductos;
