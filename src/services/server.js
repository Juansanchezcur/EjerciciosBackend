const express = require("express");
const { engine } = require("express-handlebars");

const fs = require("fs");
const nombreArchivo = "src/mensajes.json";
const path = require("path");

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

//WEBSOCKETS

myWSServer.on("connection", (socket) => {
  console.log("Un cliente se ha conectado!");
  console.log("ID SOCKET SERVER", socket.id);
  console.log("ID SOCKET CLIENTE", socket.client.id);
});

const data = {
  productos: [],
};

//Nuevas conexiones
myWSServer.on("connection", async (socket) => {
  console.log("Un cliente se ha conectado!");
  console.log("ID SOCKET SERVER", socket.id);
  console.log("ID SOCKET CLIENTE", socket.client.id);
  //Envíos al nuevo usuario

  //Lista de Productos
  socket.emit("dataNueva", data);

  //Lista de Mensajes
  const mensajesNuevoUsuario = await JSON.parse(
    await fs.promises.readFile(nombreArchivo, "utf-8")
  );
  socket.emit("listadoDeMensajes", mensajesNuevoUsuario);

  //Nuevo producto
  socket.on("producto", (nuevoProducto) => {
    data.productos.push(nuevoProducto);
    console.log(data.productos);

    myWSServer.emit("dataNueva", data);
  });

  //Mensajes del lado del ciente
  socket.on("mensaje", async (mensaje) => {
    const mensajes = await JSON.parse(
      await fs.promises.readFile(nombreArchivo, "utf-8")
    );
    console.log(mensajes);
    mensaje.date = moment().format("MMMM Do YYYY, h:mm:ss a");
    mensajes.push(mensaje);
    console.log(mensajes);
    const stringDatos = JSON.stringify(mensajes, null, "\t");
    await fs.promises.writeFile(nombreArchivo, stringDatos);
    myWSServer.emit("listadoDeMensajes", mensajes);
  });
});

app.get("/", (req, res) => {
  res.render("main", data);
});

module.exports = myServer;
