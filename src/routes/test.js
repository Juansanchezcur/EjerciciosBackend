const { Router } = require("express");
const rutaTest = Router();
const { faker } = require("@faker-js/faker");

faker.locale = "es";

rutaTest.get("/", (req, res) => {
  const respuesta = [];

  for (let i = 0; i < 5; i++) {
    respuesta.push({
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      photo: faker.image.business(),
    });
  }
  res.json({
    msg: "te enviamos 5 productos",
    productos: respuesta,
  });
});

module.exports = rutaTest;
