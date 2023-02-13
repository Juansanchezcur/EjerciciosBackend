import {
  newCartDB,
  getAllDB,
  getByIdDB,
  updateCartDB,
  deleteCartDB,
} from "../persistence/daos/carrito.persistence";

export async function newCart() {
  const cart = await newCartDB();
  return cart;
}

export async function getAllCarts() {
  const carts = await getAllDB();
  return carts;
}

export async function getCartById(id) {
  const cart = await getByIdDB(id);
  return cart;
}

export async function updateCart(id, data, otraData) {
  const cart = await updateCartDB(id, data, otraData);
  return cart;
}

export async function deleteCart(id) {
  const cart = await deleteCartDB(id);
  return cart;
}
