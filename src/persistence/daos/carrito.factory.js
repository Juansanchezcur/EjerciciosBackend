import * as DaoCarritoMongo from "./dao-mongoDB/carrito.mongo";

let option = process.env.PERSISTENCE;
let daoCarrito;

switch (option) {
  default:
    daoCarrito = DaoCarritoMongo;
    break;
}

export async function newCartDB() {
  return await daoCarrito.newCart();
}

export async function getAllDB() {
  return await daoCarrito.getAll();
}

export async function getByIdDB(id) {
  return await daoCarrito.getById(id);
}

export async function updateCartDB(id, data, otraData) {
  return await daoCarrito.updateCart(id, data, otraData);
}

export async function deleteCartDB(id) {
  return await daoCarrito.deleteCart(id);
}

export function getCarritoDao() {
  return daoCarrito;
}
