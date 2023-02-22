import {
  productSchema,
  productsCollection,
} from "./dao-mongoDB/models/products";
import MongoDB from "./dao-mongoDB/database.products";
let option = process.env.PERSISTENCE;
let daoProductos;

switch (option) {
  default:
    daoProductos = new MongoDB(productsCollection, productSchema);
    daoProductos.initMongoDB();
    break;
}

export function getProductsDao() {
  return daoProductos;
}
