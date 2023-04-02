const mongoose = require("mongoose");

 const OrderCollection = "Order";

 const OrderSchema = new mongoose.Schema(
  {
    usuario:  { type: String },
    productos: { type: Array },
    estado:  { type: String },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model(OrderCollection, OrderSchema);

module.exports = OrderModel;