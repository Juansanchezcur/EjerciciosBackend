import Koa from "koa";
import mainRouter from "./routes/index.js";
import koaBody from "koa-body";

const app = new Koa();

app.use(koaBody());

app.use(mainRouter);

const PORT = 8080;
const server = app.listen(PORT, async () => {
  console.log(`Servidor Koa escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.log("Error en Servidor Koa:", error));
