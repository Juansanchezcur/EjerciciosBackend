export default class ProductsDTO {
  constructor({ name, price, stock, description, photo, _id }) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.photo = photo;
  }
}

export function asDto(prods) {
  if (Array.isArray(prods)) return prods.map((p) => new ProductsDTO(p));
  else return new ProductsDTO(prods);
}
