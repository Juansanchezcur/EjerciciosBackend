const { Router } = require("express");
const parseArgs = require("minimist");
const args = parseArgs(process.argv.slice(2));
const { fork } = require("child_process");

const path = require("path");

const rutaProcess = Router();

const scriptPath = path.resolve(__dirname, "../utils/math.js");

rutaProcess.get("/info", (req, res) => {
  const info = {
    Argumentos_de_entrada: args,
    Path_de_ejecucion: process.cwd(),
    Id_del_Proceso: process.pid,
    Version_deNode: process.version,
    Titulo_del_proceso: process.tittle,
    Sistema_operativo: process.platform,
    Uso_de_memoria: process.memoryUsage(),
  };
  console.log(info);
  res.json({
    info,
  });
});

rutaProcess.get("/randoms", (req, res) => {
  let cantidad;
  req.query.cant ? (cantidad = req.query.cant) : (cantidad = 100000000);

  const computo = fork(scriptPath);
  computo.send(cantidad);
  computo.on("message", (resultado) => {
    res.json({
      números: resultado,
    });
  });
});

module.exports = rutaProcess;
