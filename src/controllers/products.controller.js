const { v4: uuidv4 } = require("uuid");
const logger = require("../utils/logger");

import {
  newProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../services/products.service";

export const listarProductos = async (req, res) => {
  const productos = await getAllProducts();
  if (!productos.length) {
    logger.error(`Todavía no tenemos productos`);
    return res.status(404).json({
      msg: "Todavía no tenemos productos",
    });
  } else {
    res.json({
      productos: productos,
    });
  }
};

export const buscarProductoPorId = async (req, res) => {
  try {
    const id = req.params.id;

    let producto = await getProductById(id);

    if (producto.length == 1) {
      res.json({
        msg: `devolviendo el producto con id ${id}`,
        producto: producto,
      });
    } else {
      logger.error(`error, producto no encontrado`);
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
  } catch (err) {
    logger.error(`Hubo un error, por favor verifica los datos`);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const nuevoProducto = async (req, res) => {
  const { name, description, photo, price, stock } = req.body;

  if (!name || !price || !description || !photo || !price || !stock) {
    logger.error(`Hubo un error, por favor verifica los datos`);
    return res.status(400).json({
      msg: `Hubo un error, por favor verifica los datos`,
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

  const producto = await newProduct(nuevoProducto);
  res.json({
    msg: "Producto guardado con Éxito",
    producto: producto,
  });
};

export const actualizarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, photo, price, stock } = req.body;

    if (!name || !price || !description || !photo || !price || !stock) {
      logger.error(`Hubo un error, por favor verifica los datos`);
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

    const productoActualizado = await updateProduct(id, datosActualizados, {
      new: true,
    });

    if (productoActualizado) {
      res.json({
        msg: `Producto con id: ${id} modificado correctamente`,
        producto: productoActualizado,
      });
    } else {
      logger.error("error, producto no encontrado");
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
  } catch {
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const productoBorrado = await deleteProduct(id);

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
};
