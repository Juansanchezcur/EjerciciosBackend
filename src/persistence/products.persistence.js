import * as productosMongo from "./mongoDB/products.mongo";

let option = process.env.PERSISTENCE;
let persistenceProductos;

switch (option) {
  default:
    persistenceProductos = productosMongo;
    break;
}

export async function newProductDB(nuevoProducto) {
  return await persistenceProductos.newProduct(nuevoProducto);
}

export async function getAllDB() {
  return await persistenceProductos.getAll();
}

export async function getByIdDB(id) {
  return await persistenceProductos.getById(id);
}

export async function updateProductDB(id, data, otraData) {
  return await persistenceProductos.updateProduct(id, data, otraData);
}

export async function deleteProductDB(id) {
  return await persistenceProductos.deleteProduct(id);
}
