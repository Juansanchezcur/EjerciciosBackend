const mongoose = require("mongoose");

const CarritoCollection = "carritos";

const CarritoSchema = new mongoose.Schema(
  {
    productos: { type: Array },
  },
  { timestamps: true }
);

const CarritoModel = mongoose.model(CarritoCollection, CarritoSchema);

module.exports = CarritoModel;
