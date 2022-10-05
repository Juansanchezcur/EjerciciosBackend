const fs = require("fs");
const path = require("path");

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
}

const instancia = new Contenedor("Productos.json");

const milanroll = {
  nombre: "Milanroll",
  precio: 250,
};

const main = async () => {
  const productoById = await instancia.getById(2);
  console.log(productoById);

  const data = await instancia.getAll();
  console.log(data);

  await instancia.deleteById(2);
  await instancia.saveProduct(milanroll);
  const dataCambiada = await instancia.getAll();
  console.log(dataCambiada);

  await instancia.deleteAll();
  const dataBorrada = await instancia.getAll();
  console.log(dataBorrada);
};
main();
