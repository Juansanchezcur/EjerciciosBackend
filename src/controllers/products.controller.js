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

export const addProduct = (ctx) => {
  const data = ctx.request.body;
  const product = {
    id: uuid(),
    ...data,
  };
  products.push(product);
  ctx.body = {
    status: "success",
    data: product,
  };
  ctx.status = 201;
};

export const getProduct = (ctx) => {
  const { id } = ctx.params;
  const product = products.find((prod) => prod.id === id);
  ctx.body = {
    status: "success",
    data: product,
  };
  ctx.status = 200;
};

export const editProduct = (ctx) => {
  const { id } = ctx.params;
  const data = ctx.request.body;

  let product = null;
  products.map((prod, index) => {
    if (prod.id === id) {
      let newProduct = Object.assign(prod, data);
      product = newProduct;
      products[index] = newProduct;
    }
  });
  ctx.body = {
    status: "success",
    data: data,
  };
  ctx.status = 200;
};

export const getAllProducts = (ctx) => {
  ctx.body = {
    status: "success",
    data: products,
  };
  ctx.status = 200;
};

export const deleteProduct = (ctx) => {
  const { id } = ctx.params;

  const newArray = products.filter((product) => product.id !== id);
  products = newArray;
  ctx.status = 200;
  ctx.body = {
    status: "success",
    message: `Book deleted with id: ${id}`,
  };
};
