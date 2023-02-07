const carritoModel = require("../../models/products");

export const newCart = async (nuevoCarrito) => {
  try {
    const createdCart = await carritoModel.create(nuevoCarrito);
    return createdCart;
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const products = await carritoModel.find({});
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const cart = await carritoModel.find({ _id: id });
    return cart;
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
