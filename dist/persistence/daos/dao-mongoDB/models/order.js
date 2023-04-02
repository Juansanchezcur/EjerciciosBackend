"use strict";

var mongoose = require("mongoose");
var OrderCollection = "Order";
var OrderSchema = new mongoose.Schema({
  usuario: {
    type: String
  },
  productos: {
    type: Array
  },
  estado: {
    type: String
  }
}, {
  timestamps: true
});
var OrderModel = mongoose.model(OrderCollection, OrderSchema);
module.exports = OrderModel;