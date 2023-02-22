import { getCarritoDao } from "../../persistence/daos/carrito.factory";
import { getProductsDao } from "../../persistence/daos/products.factory";
import app from "../../services/server";
import request from "supertest";
import mongoose from "mongoose";

const daoCarrito = getCarritoDao();
const daoProducts = getProductsDao();

describe("Tests server Carts", () => {
  beforeEach(async () => {
    await mongoose.connection.collections["carritos"].drop();
    await mongoose.connection.collections["products"].drop();
  });

  xit("Create Cart", async () => {
    const data = {
      productos: [],
    };

    const response = await request(app).post("/api/carrito").send(data);
    expect(response.statusCode).toBe(200);
    console.log(data.productos);
    expect(response.body.Carrito.productos).toStrictEqual(data.productos);
  });

  xit("Delete Cart", async () => {
    const data = {
      productos: [],
    };

    const responseCreate = await daoCarrito.newCart(data);

    const response = await request(app).delete(
      `/api/carrito/${responseCreate._id}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.Carrito.productos).toStrictEqual(data.productos);
  });

  xit("Get Cart by ID", async () => {
    const data = {
      productos: [],
    };

    const responseCreate = await daoCarrito.newCart(data);

    const response = await request(app).get(
      `/api/carrito/${responseCreate._id}/productos`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual(
      expect.stringContaining("todavía no tiene productos")
    );
  });

  xit("Add product to cart", async () => {
    const newProd = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const responseProduct = await daoProducts.newProduct(newProd);
    const prod_id = responseProduct._id;

    const newCart = {
      productos: [],
    };

    const responseCart = await daoCarrito.newCart(newCart);
    const cart_id = responseCart._id;

    const response = await request(app)
      .post(`/api/carrito/${cart_id}/productos/${prod_id}`)
      .send({ quantity: 2 });

    expect(response.statusCode).toBe(200);

    expect(response.body.Carrito.productos[0].description).toBe(
      newProd.description
    );
    expect(response.body.Carrito.productos[0].price).toBe(newProd.price);
  });

  xit("Delete product from cart", async () => {
    const newProd = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const responseProduct = await daoProducts.newProduct(newProd);
    const prod_id = responseProduct._id;

    const newCart = {
      productos: [],
    };

    const responseCart = await daoCarrito.newCart(newCart);

    const cart_id = responseCart._id;
    const producto = await daoProducts.getById(prod_id);
    const nuevoProducto = {
      _id: producto[0]._id,
      description: producto[0].description,
      code: producto[0].code,
      photo: producto[0].photo,
      price: producto[0].price,
      quantity: 2,
    };

    responseCart.productos.push(nuevoProducto);

    await daoCarrito.updatedoc(
      cart_id,
      { $set: { productos: responseCart.productos } },
      { new: true }
    );

    const response = await request(app).delete(
      `/api/carrito/${cart_id}/productos/${prod_id}`
    );

    expect(response.statusCode).toBe(200);

    expect(response.body.carrito_actualizado.productos).toHaveLength(0);
  });

  xit("Confirm cart", async () => {
    const newProd = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const responseProduct = await daoProducts.newProduct(newProd);
    const prod_id = responseProduct._id;

    const newCart = {
      productos: [],
    };

    const responseCart = await daoCarrito.newCart(newCart);

    const cart_id = responseCart._id;
    const producto = await daoProducts.getById(prod_id);
    const nuevoProducto = {
      _id: producto[0]._id,
      description: producto[0].description,
      code: producto[0].code,
      photo: producto[0].photo,
      price: producto[0].price,
      quantity: 2,
    };

    responseCart.productos.push(nuevoProducto);

    await daoCarrito.updatedoc(
      cart_id,
      { $set: { productos: responseCart.productos } },
      { new: true }
    );

    const response = await request(app).post(
      `/api/carrito/${cart_id}/confirmar`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual(
      expect.stringContaining("Confirmación de compra exitosa")
    );
  });
});
