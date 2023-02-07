import * as carritoMongo from "./mongoDB/carrito.mongo";

let option = process.env.PERSISTENCE;
let persistenceCarrito;

switch (option) {
  default:
    persistenceCarrito = carritoMongo;
    break;
}

export async function newCartDB(nuevoCarrito) {
  return await persistenceCarrito.newCart(nuevoCarrito);
}

export async function getAllDB() {
  return await persistenceCarrito.getAll();
}

export async function getByIdDB(id) {
  return await persistenceCarrito.getById(id);
}

export async function updateCartDB(id, data, otraData) {
  return await persistenceCarrito.updateCart(id, data, otraData);
}

export async function deleteCartDB(id) {
  return await persistenceCarrito.deleteCart(id);
}
