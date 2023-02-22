"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarritoSchema = exports.CarritoCollection = void 0;
var mongoose = require("mongoose");
var CarritoCollection = "carritos";
exports.CarritoCollection = CarritoCollection;
var CarritoSchema = new mongoose.Schema({
  productos: {
    type: Array
  }
}, {
  timestamps: true
});
exports.CarritoSchema = CarritoSchema;