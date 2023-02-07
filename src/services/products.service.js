import {
  newProductDB,
  getAllDB,
  getByIdDB,
  updateProductDB,
  deleteProductDB,
} from "../persistence/products.persistence";

export async function newProduct(product) {
  const prod = await newProductDB(product);
  return prod;
}

export async function getAllProducts() {
  const products = await getAllDB();
  return products;
}

export async function getProductById(id) {
  const product = await getByIdDB(id);
  return product;
}

export async function updateProduct(id, data, otraData) {
  const product = await updateProductDB(id, data, otraData);
  return product;
}

export async function deleteProduct(id) {
  const product = await deleteProductDB(id);
  return product;
}
