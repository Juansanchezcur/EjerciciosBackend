const { asDto } = require("../dto/carrito.dto");
const { getCarritoDao } = require("../daos/carrito.factory");

export default class CarritoRepository {
  constructor() {
    this.dao = getCarritoDao();
  }

  async newCartDB() {
    const cart = await this.dao.newCart();
    const cartdDto = asDto(cart);
    return cartdDto;
  }

  async getAllDB() {
    const carts = await this.dao.getAll();
    const cartsDto = asDto(carts);
    return cartsDto;
  }

  async getByIdDB(id) {
    const cart = await this.dao.getById(id);
    const cartDto = asDto(cart);
    return cartDto;
  }
  async updateCartDB(id, data, otraData) {
    const cart = await this.dao.updatedoc(id, data, otraData);
    const cartDto = asDto(cart);
    return cartDto;
  }
  async deleteCartDB(id) {
    const cart = await this.dao.deletedoc(id);
    const cartDto = asDto(cart);
    return cartDto;
  }
}
