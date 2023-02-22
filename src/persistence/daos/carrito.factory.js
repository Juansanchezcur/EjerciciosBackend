import { CarritoSchema, CarritoCollection } from "./dao-mongoDB/models/carrito";
import MongoDB from "./dao-mongoDB/database.carrito";
let option = process.env.PERSISTENCE;
let daoCarrito;

switch (option) {
  default:
    daoCarrito = new MongoDB(CarritoCollection, CarritoSchema);
    daoCarrito.initMongoDB();
    break;
}

export function getCarritoDao() {
  return daoCarrito;
}
