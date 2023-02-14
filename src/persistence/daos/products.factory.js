import * as daoProductosMongo from "./dao-mongoDB/products.mongo";
const initMongoDB = require("./dao-mongoDB/database.mongo");
let option = process.env.PERSISTENCE;
let daoProductos;

switch (option) {
  default:
    daoProductos = daoProductosMongo;
    initMongoDB();
    break;
}

export async function newProductDB(nuevoProducto) {
  return await daoProductos.newProduct(nuevoProducto);
}

export async function getAllDB() {
  return await daoProductos.getAll();
}

export async function getByIdDB(id) {
  return await daoProductos.getById(id);
}

export async function updateProductDB(id, data, otraData) {
  return await daoProductos.updateProduct(id, data, otraData);
}

export async function deleteProductDB(id) {
  return await daoProductos.deleteProduct(id);
}

export function getProductsDao() {
  return daoProductos;
}
