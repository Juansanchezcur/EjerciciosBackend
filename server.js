const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

const PORT = process.env.PORT||3000;

const server = app.listen(PORT, () => {
  `servidor escuchando en el puerto ${server.address().port}`;
});

server.on("error", (error) => console.log(`Errore en servidor ${error} `));

app.get("/productos", async (req, res) => {
  res.send(await instancia.getAll());
});

app.get("/productoRandom", async (req, res) => {
  res.send(await instancia.getRandomProduct());
});

class Contenedor {
  constructor(nombreDelArchivo) {
    this.nombreArchivo = nombreDelArchivo;
  }

  getAll = async () => {
    const datos = await this.traerProductos();
    return datos;
  };
  traerProductos = async () => {
    const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
    return JSON.parse(productos);
  };
  getById = async (id) => {
    const datos = await this.traerProductos();
    const indice = datos.findIndex((unProducto) => unProducto.id == id);
    return datos[indice];
  };
  saveProduct = async (producto) => {
    const datos = await this.traerProductos();
    producto.id = datos[datos.length - 1].id + 1;
    datos.push(producto);
    await this.escribirArchivo(datos);
  };

  escribirArchivo = async (datos) => {
    const stringDatos = JSON.stringify(datos, null, "\t");
    await fs.promises.writeFile(this.nombreArchivo, stringDatos);
  };

  deleteAll = async () => {
    await this.escribirArchivo([]);
  };
  deleteById = async (idBuscado) => {
    const datos = await this.traerProductos();
    const indice = datos.findIndex((unProducto) => unProducto.id == idBuscado);
    if (indice < 0) {
      return;
    } else {
      datos.splice(indice, 1);
      await this.escribirArchivo(datos);
    }
  };
  getRandomProduct = async () => {
    const datos = await this.traerProductos();
    const indice = Math.floor(Math.random() * datos.length);
    return datos[indice];
  };
}

const instancia = new Contenedor("Productos.json");
