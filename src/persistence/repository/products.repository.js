const { asDto } = require("../dto/products.dto");
const { getProductsDao } = require("../daos/products.factory");

export default class ProductsRepository {
  constructor() {
    this.dao = getProductsDao();
  }

  async newProductDB(info) {
    const product = await this.dao.newProduct(info);
    console.log(product);
    const prodDto = asDto(product);
    return prodDto;
  }

  async getAllDB() {
    const products = await this.dao.getAll();
    const prodsDto = asDto(products);
    return prodsDto;
  }

  async getByIdDB(id) {
    const product = await this.dao.getById(id);
    const prodDto = asDto(product);
    return prodDto;
  }
  async updateProductDB(id, data, otraData) {
    const product = await this.dao.updateProduct(id, data, otraData);
    const prodDto = asDto(product);
    return prodDto;
  }
  async deleteProductDB(id) {
    const product = await this.dao.deleteProduct(id);
    const prodDto = asDto(product);
    return prodDto;
  }
}
