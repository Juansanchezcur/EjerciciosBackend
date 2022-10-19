const path = require("path");
const { Router } = require("express");

const filePath = path.resolve(__dirname, "../../productos.json");
console.log(filePath);

const rutaProductos = Router();

const productos = [];

rutaProductos.get("/", (req, res) => {
  res.json({
    productos: productos,
  });
});

rutaProductos.get("/:id", (req, res) => {
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

rutaProductos.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  console.log(req.body);
  if (!title || !price || !thumbnail) {
    return res.status(400).json({
      msg: "Por favor, verifica los datos ",
    });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    title,
    price,
    thumbnail,
  };

  productos.push(nuevoProducto);

  res.json({
    msg: "Producto guardado con Éxito",
    producto: nuevoProducto,
  });
});
rutaProductos.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, price, thumbnail } = req.body;

  const indice = productos.findIndex((unProducto) => unProducto.id == id);

  if (indice < 0) {
    return res.status(404).json({
      msg: "error, producto no encontrado",
    });
  }

  if (!title || !price || !thumbnail) {
    return res.status(400).json({
      msg: "Por favor verifica los datos ingresados",
    });
  }

  const productoActualizado = {
    id: productos[indice].id,
    title,
    price,
    thumbnail,
  };

  productos.splice(indice, 1, productoActualizado);

  res.json({
    msg: `Producto con id: ${id} modificado correctamente`,
    producto: productoActualizado,
  });
});

rutaProductos.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = productos.filter((unProducto) => unProducto.id == id);

  productos.splice(indice, 1);

  res.json({
    msg: `Borrando producto con id ${id}`,
  });
});
module.exports = rutaProductos;
