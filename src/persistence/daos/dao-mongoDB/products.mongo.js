const productModel = require("../../../models/products");
const { asDto } = require("../../dto/products.dto");
export const newProduct = async (nuevoProducto) => {
  try {
    const newProduct = await productModel.create(nuevoProducto);
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const products = await productModel.find({});
    return asDto(products);
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const product = await productModel.find({ _id: id });
    return asDto(product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, data, otraData) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      data,
      otraData
    );
    return updatedProduct;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productoBorrado = await productModel.findByIdAndDelete(id);
    return productoBorrado;
  } catch (error) {
    console.log(error);
  }
};
