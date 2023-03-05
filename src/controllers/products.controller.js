import { v4 as uuid } from "uuid";

let products = [
  {
    id: "1",
    name: "Auto",
    description: "Auto de gama alta",
    price: 15000,
    img: "imgProd1",
  },
  {
    id: "2",
    name: "Moto",
    description: "Moto de gama alta",
    price: 5000,
    img: "imgProd2",
  },
];

export const addProduct = ({ data }) => {
  const product = {
    id: uuid(),
    ...data,
  };
  products.push(product);
  return product;
};

export const getProduct = ({ id }) => {
  const product = products.find((prod) => prod.id === id);
  return product;
};

export const editProduct = ({ id, data }) => {
  let product = null;
  products.map((prod, index) => {
    if (prod.id === id) {
      let newProduct = Object.assign(prod, data);
      product = newProduct;
      products[index] = newProduct;
    }
  });
  return product;
};

export const getAllProducts = () => {
  return products;
};

export const deleteProduct = ({ id }) => {
  const newArray = products.filter((product) => product.id !== id);
  products = newArray;
  return products;
};
