const express = require("express");
const { engine } = require("express-handlebars");
const fs = require("fs");
const nombreArchivo = "src/mensajes.json";
const path = require("path");

const knex = require("knex");

const app = express();
const http = require("http");
const io = require("socket.io");

const bp = require("body-parser");

const moment = require("moment");
moment().format();

app.use(express.static("public"));

const myServer = http.Server(app);
const myWSServer = io(myServer);

const viewsFolderPath = path.resolve(__dirname, "../../views");
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const partialsFolderPath = `${viewsFolderPath}/partials`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", viewsFolderPath);

app.engine(
  "hbs",
  engine({
    //configuracion de handlebars
    layoutsDir: layoutsFolderPath,
    partialsDir: partialsFolderPath,
    extname: "hbs",
    defaultLayout: defaultLayoutPath,
  })
);

//Database Productos
const db = require("../../db.js");

const listarProductos = async () => {
  const productos = await db("products").select("*");
  return productos;
};

const listarProducto = async (id) => {
  const productos = await db("products").where("id", id).select("*");
  return productos;
};

const crearProducto = async (producto) => {
  return await db("products").insert(producto);
};

const actualizarProducto = (id, productoActualizado) => {
  return db("products").where("id", id).update(productoActualizado);
};

const borrarProducto = (id) => {
  return db("products").where("id", id).del();
};

const list = async () => {
  try {
    const getAll = await listarProductos();
    return getAll;
  } catch (error) {
    return error;
  }
};

const single = async () => {
  try {
    const producto = await listarProductos();
    console.log(producto);
    return producto;
  } catch (error) {
    return error;
  }
};

const created = async (producto) => {
  try {
    const prod = await crearProducto(producto);
    console.log(prod);
    return prod;
  } catch (error) {
    return error;
  }
};

//Database Mensajes
const insert = require("../../insert.js");

const getData = require("../../getAll.js");
getData.getAllMsgs().then((data) => {
  console.log(data);
});
//WEBSOCKETS

myWSServer.on("connection", (socket) => {
  console.log("Un cliente se ha conectado!");
  console.log("ID SOCKET SERVER", socket.id);
  console.log("ID SOCKET CLIENTE", socket.client.id);
});

//Nuevas conexiones
myWSServer.on("connection", async (socket) => {
  console.log("Un cliente se ha conectado!");
  console.log("ID SOCKET SERVER", socket.id);
  console.log("ID SOCKET CLIENTE", socket.client.id);
  //Envíos al nuevo usuario

  //Lista de Productos
  list().then((data) => {
    socket.emit("dataNueva", data);
  });

  //Lista de Mensajes

  getData.getAllMsgs().then((data) => {
    socket.emit("listadoDeMensajes", data);
  });

  //Nuevo producto
  socket.on("producto", (nuevoProducto) => {
    console.log("Nuevo producto a agregar: ", nuevoProducto);
    created(nuevoProducto);
    list().then((data) => {
      myWSServer.emit("dataNueva", data);
    });
  });

  //Mensajes del lado del ciente
  socket.on("mensaje", async (mensaje) => {
    mensaje.timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");
    await insert.insertMessageInTable(mensaje);
    getData.getAllMsgs().then((data) => {
      myWSServer.emit("listadoDeMensajes", data);
    });
  });
});

app.get("/", (req, res) => {
  list().then((data) => {
    res.render("main", data);
  });
});

module.exports = myServer;
