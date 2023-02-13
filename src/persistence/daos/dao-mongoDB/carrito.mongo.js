const carritoModel = require("../../../models/carrito");
const { asDto } = require("../../dto/carrito.dto.js");
export const newCart = async () => {
  try {
    const nuevoCarrito = {
      productos: [],
    };
    const createdCart = await carritoModel.create(nuevoCarrito);
    return asDto(createdCart);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const carts = await carritoModel.find({});
    return asDto(carts);
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const cart = await carritoModel.find({ _id: id });
    return asDto(cart);
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (id, data, otraData) => {
  try {
    console.log(id, data, otraData);
    const updatedCart = await carritoModel.findByIdAndUpdate(
      id,
      data,
      otraData
    );
    return updatedCart;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async (id) => {
  try {
    const deletedCart = await carritoModel.findByIdAndDelete(id);
    return deletedCart;
  } catch (error) {
    console.log(error);
  }
};
