const { Router } = require("express");
const rutaCarrito = Router();

const moment = require("moment");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const fileName = "./carrito.json";

rutaCarrito.get("/:id", async (req, res) => {
  const id = req.params.id;
  const carritos = await JSON.parse(await fs.promises.readFile(fileName));
  const indice = carritos.findIndex((unCarrito) => unCarrito.id == id);

  if (indice < 0) {
    return res.status(404).json({
      msg: "error, carrito no encontrado",
    });
  }

  if (!carritos[indice].productos) {
    res.json({
      msg: `El carrito con id:${id} todavía no tiene productos`,
    });
  }
  res.json({
    productos: carritos[indice].productos,
  });
});

rutaCarrito.post("/:id_carrito/productos/:id_prod", async (req, res) => {
  const { id_carrito, id_prod } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({
      msg: "Por favor, ingresa una cantidad válida ",
    });
  }
  //Traigo los datos de los archivos
  const carritos = await JSON.parse(await fs.promises.readFile(fileName));
  const productos = await JSON.parse(
    await fs.promises.readFile("./productos.json")
  );

  //Saco los índices del producto y el carrito seleccionados
  const indiceCarrito = carritos.findIndex(
    (unCarrito) => unCarrito.id == id_carrito
  );
  if (indiceCarrito < 0) {
    return res.status(404).json({
      msg: "error, carrito no encontrado",
    });
  }

  const indiceProducto = productos.findIndex(
    (unProducto) => unProducto.id == id_prod
  );
  if (indiceProducto < 0) {
    return res.status(404).json({
      msg: "error, producto no encontrado",
    });
  }
  //Agrego el producto al carrito
  carritos[indiceCarrito].productos = [];

  const nuevoProducto = {
    id: productos[indiceProducto].id,
    quantity,
    timestamp: productos[indiceProducto].timestamp,
    description: productos[indiceProducto].description,
    code: productos[indiceProducto].code,
    photo: productos[indiceProducto].photo,
    price: productos[indiceProducto].price,
  };

  productos[indiceProducto].stock -= quantity;
  carritos[indiceCarrito].productos.push(nuevoProducto);

  //Guardo el carrito con el producto y actualizo el stock del producto en los archivos
  const productosString = JSON.stringify(productos, null, "\t");
  await fs.promises.writeFile(fileName, productosString);

  const carritosString = JSON.stringify(carritos, null, "\t");
  await fs.promises.writeFile(fileName, carritosString);

  res.json({
    msg: "Producto guardado con Éxito",
    producto: nuevoProducto,
  });
});

rutaCarrito.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const carritos = await JSON.parse(await fs.promises.readFile(fileName));
  const indice = carritos.filter((unCarrito) => unCarrito.id == id);

  carritos.splice(indice, 1);

  const carritosString = JSON.stringify(carritos, null, "\t");
  await fs.promises.writeFile(fileName, carritosString);

  res.json({
    msg: `Borrando Carrito con id: ${id_carrito}`,
  });
});

rutaCarrito.delete("/:id_carrito/productos/:id_prod", async (req, res) => {
  const { id_carrito, id_prod } = req.params;

  const carritos = await JSON.parse(await fs.promises.readFile(fileName));
  const indiceCarrito = carritos.filter(
    (unCarrito) => unCarrito.id == id_carrito
  );
  if (indiceCarrito < 0) {
    return res.status(404).json({
      msg: "error, carrito no encontrado",
    });
  }

  const indiceProducto = carritos[indiceCarrito].filter(
    (unProducto) => unProducto.id == id_prod
  );
  if (indiceProducto < 0) {
    return res.status(404).json({
      msg: "error, producto no encontrado",
    });
  }

  carritos[indiceCarrito].splice(indiceProducto, 1);

  const carritosString = JSON.stringify(carritos, null, "\t");
  await fs.promises.writeFile(fileName, carritosString);

  res.json({
    msg: `Borrando producto ${id_prod} del carrito ${id_carrito}`,
  });
});

module.exports = rutaCarrito;
