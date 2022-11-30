const { Router } = require("express");
const productModel = require("../models/products");
const { v4: uuidv4 } = require("uuid");

const rutaProductos = Router();

rutaProductos.get("/", async (req, res) => {
  const productos = await productModel.find({});
  if (!productos.length) {
    return res.status(404).json({
      msg: "Todavía no tenemos productos",
    });
  } else {
    res.json({
      productos: productos,
    });
  }
});

rutaProductos.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let producto = await productModel.find({ _id: id });

    console.log(producto);
    if (producto.length == 1) {
      res.json({
        msg: `devolviendo el producto con id ${id}`,
        producto: producto,
      });
    } else {
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
  } catch (err) {
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaProductos.post("/", async (req, res) => {
  const { name, description, photo, price, stock } = req.body;
  console.log(req.body);

  if (!name || !price || !description || !photo || !price || !stock) {
    return res.status(400).json({
      msg: "Por favor, verifica los datos ",
    });
  }

  const nuevoProducto = {
    name,
    description,
    code: uuidv4(),
    photo,
    price,
    stock,
  };
  console.log("nuevo Producto: " + nuevoProducto);
  const producto = await productModel.create(nuevoProducto);
  console.log(producto);
  res.json({
    msg: "Producto guardado con Éxito",
    producto: producto,
  });
});

rutaProductos.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, photo, price, stock } = req.body;

    if (!name || !price || !description || !photo || !price || !stock) {
      return res.status(400).json({
        msg: "Por favor verifica los datos ingresados",
      });
    }

    const datosActualizados = {
      name,
      description,
      photo,
      price,
      stock,
    };

    const productoActualizado = await productModel.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true }
    );
    console.log(productoActualizado);
    if (productoActualizado) {
      res.json({
        msg: `Producto con id: ${id} modificado correctamente`,
        producto: productoActualizado,
      });
    } else {
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
  } catch {
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaProductos.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productoBorrado = await productModel.findByIdAndDelete(id);
    console.log(productoBorrado);
    if (productoBorrado) {
      res.json({
        msg: `Borrando producto con id ${id}`,
        producto: productoBorrado,
      });
    } else {
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
  } catch {
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

module.exports = rutaProductos;
