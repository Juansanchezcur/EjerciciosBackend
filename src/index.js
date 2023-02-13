const server = require("./services/server");

const parseArgs = require("minimist");
const options = { default: { port: 8080 } };
const args = parseArgs(process.argv.slice(2), options);

console.log(args);

const init = async () => {
  const puerto = args.port;

  server.listen(puerto, () => {
    console.log(`Servidor Listo escuchando en el puerto ${puerto}`);
  });
};

init();
