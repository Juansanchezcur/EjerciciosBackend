const mongoose = require("mongoose");

const carritosCollection = "carritos";

const CarritoSchema = new mongoose.Schema(
  {
    productos: { type: Array, default: [] },
  },
  { timestamps: true }
);

const carritoModel = mongoose.model(carritosCollection, CarritoSchema);

module.exports = carritoModel;
