"use strict";

var mongoose = require("mongoose");
var CarritoCollection = "carritos";
var CarritoSchema = new mongoose.Schema({
  productos: {
    type: Array
  }
}, {
  timestamps: true
});
var CarritoModel = mongoose.model(CarritoCollection, CarritoSchema);
module.exports = CarritoModel;