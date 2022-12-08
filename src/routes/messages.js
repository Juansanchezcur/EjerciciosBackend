const { Router } = require("express");
const rutaMessages = Router();
import fs from "fs";
import { normalize, schema, denormalize } from "normalizr";

const fileName = "./messages.json";

const author = new schema.Entity("author", {}, { idAttribute: "email" });
const msg = new schema.Entity(
  "message",
  { author: author },
  { idAttribute: "_id" }
);

const finalSchema = [msg];

rutaMessages.get("/normalized", async (req, res) => {
  const mensajes = await JSON.parse(await fs.promises.readFile(fileName));
  console.log(mensajes);
  const mensajesNormalizados = normalize(mensajes, finalSchema);

  res.json({
    Mensajes_normalizados: mensajesNormalizados,
  });
});

rutaMessages.get("/notNormalized", async (req, res) => {
  const mensajes = await JSON.parse(await fs.promises.readFile(fileName));
  console.log(mensajes);
  const mensajesNormalizados = normalize(mensajes, finalSchema);
  const mensajesDesnormalizados = denormalize(
    mensajesNormalizados.result,
    finalSchema,
    mensajesNormalizados.entities
  );
  res.json({
    mensajesDesnormalizados: mensajesDesnormalizados,
  });
});

module.exports = rutaMessages;
