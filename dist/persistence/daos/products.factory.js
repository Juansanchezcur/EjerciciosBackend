"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsDao = getProductsDao;
var _products = require("./dao-mongoDB/models/products");
var _database = _interopRequireDefault(require("./dao-mongoDB/database.products"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var option = process.env.PERSISTENCE;
var daoProductos;
switch (option) {
  default:
    daoProductos = new _database["default"](_products.productsCollection, _products.productSchema);
    daoProductos.initMongoDB();
    break;
}
function getProductsDao() {
  return daoProductos;
}