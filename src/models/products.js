const mongoose = require("mongoose");

export const productsCollection = "products";

export const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, max: 30 },
    description: { type: String, require: true, max: 100 },
    code: { type: String, require: true, max: 30 },
    photo: { type: String, require: true },
    price: { type: Number, require: true, max: 100000 },
    stock: { type: Number, require: true, max: 100 },
  },
  { timestamps: true }
);
