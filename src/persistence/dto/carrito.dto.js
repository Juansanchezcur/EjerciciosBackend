export default class CarritoDTO {
  constructor({ _id, productos }) {
    this._id = _id;
    this.productos = productos;
  }
}

export function asDto(carts) {
  if (Array.isArray(carts)) return carts.map((p) => new CarritoDTO(p));
  else return new CarritoDTO(carts);
}
