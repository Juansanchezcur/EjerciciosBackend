const server = require("./services/server");

const puerto = process.env.PORT || 8080;

server.listen(puerto, () => {
  console.log(`Servidor Listo escuchando en el puerto ${puerto}`);
});
