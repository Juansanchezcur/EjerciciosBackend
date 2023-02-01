const { Router } = require("express");
const rutaCarrito = Router();
const carritoModel = require("../models/carrito");
const productModel = require("../models/products");
const logger = require("../utils/logger");

import {
  sendWhattsapToHost,
  sendWhatsappToClient,
} from "../controllers/sms.controller";

rutaCarrito.post("/", async (req, res) => {
  const nuevoCarrito = {
    productos: [],
  };
  const carritoAgregado = await carritoModel.create(nuevoCarrito);

  res.json({
    msg: "Carrito guardado con Éxito",
    Carrito: carritoAgregado,
  });
});

rutaCarrito.get("/:id/productos", async (req, res) => {
  try {
    const id = req.params.id;
    let carrito = await carritoModel.find({ _id: id });
    console.log(carrito);
    if (carrito.length == 1) {
      if (carrito[0].productos.length < 1) {
        logger.error(`El carrito con id:${id} todavía no tiene productos`);
        res.json({
          msg: `El carrito con id:${id} todavía no tiene productos`,
        });
      } else {
        res.json({
          productos: carrito[0].productos,
        });
      }
    } else {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos");
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaCarrito.post("/:id_carrito/productos/:id_prod", async (req, res) => {
  try {
    const { id_carrito, id_prod } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      logger.error("cantidad ingresada menor a 0");
      return res.status(400).json({
        msg: "Por favor, ingresa una cantidad mayor a 0 ",
      });
    }
    //Traigo los datos de los archivos
    const carrito = await carritoModel.find({ _id: id_carrito });

    const producto = await productModel.find({ _id: id_prod });
    console.log("producto ", producto);
    if (!carrito) {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }

    if (!producto) {
      logger.error("error, producto no encontrado");
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
    if (quantity > producto.stock) {
      logger.error(
        "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo"
      );
      return res.status(400).json({
        msg: "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo",
        stock: producto.stock,
      });
    }

    const nuevoProducto = {
      _id: producto[0]._id,
      quantity,
      description: producto[0].description,
      code: producto[0].code,
      photo: producto[0].photo,
      price: producto[0].price,
    };
    console.log(carrito);
    carrito[0].productos.push(nuevoProducto);
    console.log("tengo estos productos: ", carrito[0].productos);

    const CarritoActualizado = await carritoModel.findByIdAndUpdate(
      { _id: id_carrito },
      { productos: carrito[0].productos },
      { new: true }
    );
    res.json({
      msg: "Producto guardado con Éxito",
      producto: nuevoProducto,
      Carrito: CarritoActualizado,
    });
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos");
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaCarrito.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const carritoBorrado = await carritoModel.findByIdAndDelete({ _id: id });
    console.log(carritoBorrado);
    if (carritoBorrado) {
      res.json({
        msg: `Borrando carrito con id ${id}`,
        producto: carritoBorrado,
      });
    } else {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos");
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaCarrito.delete("/:id_carrito/productos/:id_prod", async (req, res) => {
  try {
    const { id_carrito, id_prod } = req.params;

    const carritoElegido = await carritoModel.find({ _id: id_carrito });

    if (!carritoElegido) {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
    console.log(carritoElegido);
    const productoElegido = carritoElegido[0].productos.find(
      (unProducto) => unProducto._id == id_prod
    );

    console.log(productoElegido);
    if (productoElegido == undefined) {
      logger.error("error, producto no encontrado");
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }

    carritoElegido[0].productos.splice(productoElegido, 1);

    const CarritoActualizado = await carritoModel.findByIdAndUpdate(
      { _id: id_carrito },
      { productos: carritoElegido[0].productos },
      { new: true }
    );

    res.json({
      msg: `Borrando producto ${id_prod} del carrito ${id_carrito}`,
      carrito_actualizado: CarritoActualizado,
    });
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos");
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

rutaCarrito.post("/:id_carrito/confirmar", async (req, res) => {
  try {
    const { id_carrito } = req.params;

    const carrito = await carritoModel.find({ _id: id_carrito });
    logger.info(carrito);

    const listadoDeproductos = carrito[0].productos.map(
      (producto) => `ID: ${producto._id}      Cantidad ${producto.quantity} \n`
    );

    const hostMessage = `Carrito confirmado:\n \n Productos: \n\n${listadoDeproductos}`;
    const userMessage = `Querido Cliente:\n \nQuedó confirmado su carrito con los siguientes productos: \n\n${listadoDeproductos}\n\n A la brevedad nos contactaremos con usted`;
    sendWhattsapToHost(hostMessage),
      sendWhatsappToClient(userMessage),
      await carritoModel.findByIdAndDelete({ _id: id_carrito });
    res.json({
      msg: "Confirmación de compra exitosa",
      Carrito: id_carrito,
    });
  } catch (error) {
    logger.error("Hubo un error, por favor verifica los datos " + error);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
});

module.exports = rutaCarrito;
