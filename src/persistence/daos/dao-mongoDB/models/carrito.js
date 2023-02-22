const mongoose = require("mongoose");

export const CarritoCollection = "carritos";

export const CarritoSchema = new mongoose.Schema(
  {
    productos: { type: Array },
  },
  { timestamps: true }
);
