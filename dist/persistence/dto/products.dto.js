"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDto = asDto;
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ProductsDTO = /*#__PURE__*/_createClass(function ProductsDTO(_ref) {
  var name = _ref.name,
    price = _ref.price,
    stock = _ref.stock,
    description = _ref.description,
    photo = _ref.photo;
  _classCallCheck(this, ProductsDTO);
  this.name = name;
  this.description = description;
  this.price = price;
  this.stock = stock;
  this.photo = photo;
});
exports["default"] = ProductsDTO;
function asDto(prods) {
  if (Array.isArray(prods)) return prods.map(function (p) {
    return new ProductsDTO(p);
  });else return new ProductsDTO(prods);
}