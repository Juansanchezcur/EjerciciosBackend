"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsCollection = exports.productSchema = void 0;
var mongoose = require("mongoose");
var productsCollection = "products";
exports.productsCollection = productsCollection;
var productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: 30
  },
  description: {
    type: String,
    require: true,
    max: 100
  },
  code: {
    type: String,
    require: true,
    max: 30
  },
  photo: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
    max: 100000
  },
  stock: {
    type: Number,
    require: true,
    max: 100
  }
}, {
  timestamps: true
});
exports.productSchema = productSchema;