const server = require("./services/server");
const initMongoDB = require("../database");

const init = async () => {
  const puerto = 8080;
  await initMongoDB();

  server.listen(puerto, () => {
    console.log(`Servidor Listo escuchando en el puerto ${puerto}`);
  });
};

init();
