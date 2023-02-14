import ProductsRepository from "../persistence/repository/products.repository";
const productsRepository = new ProductsRepository();

export async function newProduct(product) {
  const prod = await productsRepository.newProductDB(product);
  return prod;
}

export async function getAllProducts() {
  const products = await productsRepository.getAllDB();
  return products;
}

export async function getProductById(id) {
  const product = await productsRepository.getByIdDB(id);
  return product;
}

export async function updateProduct(id, data, otraData) {
  const product = await productsRepository.updateProductDB(id, data, otraData);
  return product;
}

export async function deleteProduct(id) {
  const product = await productsRepository.deleteProductDB(id);
  return product;
}
