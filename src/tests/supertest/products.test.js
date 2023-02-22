import { getProductsDao } from "../../persistence/daos/products.factory";
import app from "../../services/server";
import request from "supertest";
import mongoose from "mongoose";

const daoProducts = getProductsDao();

describe("Tests server Products", () => {
  beforeEach(async () => {
    await mongoose.connection.collections["products"].drop();
  });

  xit("Create Product", async () => {
    const data = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const response = await request(app).post("/api/productos").send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body.producto.name).toBe(data.name);
  });

  xit("Delete Product", async () => {
    const data = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const responseCreate = await daoProducts.newProduct(data);

    const response = await request(app).delete(
      `/api/productos/${responseCreate._id}`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.producto.name).toBe(data.name);
    expect(response.body.producto.price).toBe(data.price);
  });

  xit("Get all Products", async () => {
    const data = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };
    await daoProducts.newProduct(data);
    const response = await request(app).get("/api/productos");

    expect(response.statusCode).toBe(200);
    expect(response.body.productos).toHaveLength(1);
    expect(response.body.productos).toBeInstanceOf(Array);
  });

  xit("Get Product by ID", async () => {
    const data = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const responseCreate = await daoProducts.newProduct(data);

    const response = await request(app).get(
      `/api/productos/${responseCreate._id}`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.producto[0].name).toBe(data.name);
    expect(response.body.producto[0].price).toBe(data.price);
  });

  xit("Update Product", async () => {
    const data = {
      name: "Auto",
      description: "Un auto",
      code: 1234,
      price: 100,
      photo: "asd",
      stock: 5,
    };

    const changedData = {
      name: "Un auto mejor",
      description: "un auto más caro",
      code: 12345,
      price: 15,
      photo: "asdasd2",
      stock: 100,
    };

    const responseCreate = await daoProducts.newProduct(data);
    const response = await request(app)
      .put(`/api/productos/${responseCreate._id}`)
      .send(changedData);

    expect(response.statusCode).toBe(200);
    expect(response.body.producto.price).toBe(changedData.price);
    expect(response.body.producto.photo).toBe(changedData.photo);
    expect(response.body.producto.name).toBe(changedData.name);
  });
});
