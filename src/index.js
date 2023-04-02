const server = require("./services/server");
import dotenv from "dotenv";
dotenv.config();

const init = async () => {
  const puerto = process.env.PORT || 8080;

  server.listen(puerto, () => {
    console.log(`Servidor Listo escuchando en el puerto ${puerto}`);
  });
};
server.on("error", (err) => console.log(err));

init();
