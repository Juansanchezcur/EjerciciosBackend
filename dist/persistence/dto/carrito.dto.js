"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDto = asDto;
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var CarritoDTO = /*#__PURE__*/_createClass(function CarritoDTO(_ref) {
  var _id = _ref._id,
    productos = _ref.productos;
  _classCallCheck(this, CarritoDTO);
  this._id = _id;
  this.productos = productos;
});
exports["default"] = CarritoDTO;
function asDto(carts) {
  if (Array.isArray(carts)) return carts.map(function (p) {
    return new CarritoDTO(p);
  });else return new CarritoDTO(carts);
}