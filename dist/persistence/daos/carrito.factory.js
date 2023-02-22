"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCarritoDao = getCarritoDao;
var _carrito = require("./dao-mongoDB/models/carrito");
var _database = _interopRequireDefault(require("./dao-mongoDB/database.carrito"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var option = process.env.PERSISTENCE;
var daoCarrito;
switch (option) {
  default:
    daoCarrito = new _database["default"](_carrito.CarritoCollection, _carrito.CarritoSchema);
    daoCarrito.initMongoDB();
    break;
}
function getCarritoDao() {
  return daoCarrito;
}