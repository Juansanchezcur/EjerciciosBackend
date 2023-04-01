const express = require("express");
require("dotenv").config();
const fs = require("fs");
import morgan from "morgan";
const RouterPrincipal = require("../routes/index");
import session from "express-session";
import passport from "passport";
import { loginFunc, signUpFunc } from "./auth.js";
import MongoStore from "connect-mongo";
const logger = require("../utils/logger");
const app = express();
let bodyParser = require("body-parser");
import cors from "cors";
const { engine } = require("express-handlebars");
const http = require("http");
let io = require("socket.io");
const moment = require("moment");
moment().format();

const messagesModel = require("../persistence/daos/dao-mongoDB/models/messages");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cors());
let jsonParser = bodyParser.json();

const nombreArchivo = "src/mensajes.json";
const path = require("path");

const ttlSeconds = 300;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_ATLAS,
  }),
  secret: "secretString",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));

app.use(passport.initialize());

app.use(passport.session());

app.use((req, res, next) => {
  logger.info(`
      Método= ${req.method}, Ruta= ${req.path}`),
    next();
});

passport.use("login", loginFunc);
passport.use("signup", signUpFunc);

const viewsFolderPath = path.resolve(__dirname, "../views");
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const partialsFolderPath = `${viewsFolderPath}/partials`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;

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

const myServer = http.Server(app);
const myWSServer = io(myServer);

//Nuevas conexiones
myWSServer.on("connection", async (socket) => {
  console.log("ID SOCKET SERVER", socket.id);
  console.log("ID SOCKET CLIENTE", socket.client.id);
  //Envíos al nuevo usuario

  //Lista de Mensajes
  const mensajesNuevoUsuario = await messagesModel.find({});
  socket.emit("listadoDeMensajes", mensajesNuevoUsuario);

  //Mensajes del lado del ciente
  socket.on("mensaje", async (mensaje) => {
    mensaje.date = moment().format("MMMM Do YYYY, h:mm:ss a");
    messagesModel.create(mensaje);

    const mensajes = await messagesModel.find({});
    myWSServer.emit("listadoDeMensajes", mensajes);
  });
});

app.get("/", (req, res) => {
  res.render("main");
});

app.use("/api", RouterPrincipal);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send({
    msg: "Tuvimos un problema",
  });
});

module.exports = myServer;
