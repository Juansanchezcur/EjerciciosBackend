const mongoose = require("mongoose");
const carritoModel = require("../models/carrito");
const productsCollection = "products";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, max: 30 },
    description: { type: String, require: true, max: 100 },
    code: { type: String, require: true, max: 30 },
    photo: { type: String, require: true },
    price: { type: Number, require: true, max: 10 },
    stock: { type: Number, require: true, max: 100 },
  },
  { timestamps: true }
);

const productModel = mongoose.model(productsCollection, productSchema);

module.exports = productModel;
