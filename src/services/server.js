const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const bp = require("body-parser");
app.use(express.static("public"));

const viewsFolderPath = path.resolve(__dirname, "../../views");
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const partialsFolderPath = `${viewsFolderPath}/partials`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

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

const data = {
  productos: [
    {
      name: "Bicicleta",
      price: 500,
      thumbnail:
        "https://static.guiainfantil.com/media/25565/c/los-beneficios-de-las-bicicletas-sin-pedales-para-ninos-lg.jpg",
    },
  ],
};

app.get("/productos", (req, res) => {
  res.render("main", data);
});

app.post("/productos", (req, res) => {
  console.log(req.body);
  const { name, price, thumbnail } = req.body;
  console.log(req.body);
  if (!name || !price || !thumbnail) {
    return res.status(400).json({
      msg: "Por favor, verifica los datos ",
    });
  }

  const nuevoProducto = {
    id: data.productos.length + 1,
    name,
    price,
    thumbnail,
  };

  data.productos.push(nuevoProducto);

  res.redirect("/productos");
});
module.exports = app;
