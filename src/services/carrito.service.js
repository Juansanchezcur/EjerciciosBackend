import CarritoRepository from "../persistence/repository/carrito.repository";

const carritoRepository = new CarritoRepository();

export async function newCart() {
  const cart = await carritoRepository.newCartDB();
  return cart;
}

export async function getAllCarts() {
  const carts = await carritoRepository.getAllDB();
  return carts;
}

export async function getCartById(id) {
  const cart = await carritoRepository.getByIdDB(id);
  return cart;
}

export async function updateCart(id, data, otraData) {
  const cart = await carritoRepository.updateCartDB(id, data, otraData);
  return cart;
}

export async function deleteCart(id) {
  const cart = await carritoRepository.deleteCartDB(id);
  return cart;
}
