"use strict";

var _require = require("express"),
  Router = _require.Router;
var parseArgs = require("minimist");
var args = parseArgs(process.argv.slice(2));
var _require2 = require("child_process"),
  fork = _require2.fork;
var path = require("path");
var rutaProcess = Router();
var scriptPath = path.resolve(__dirname, "../utils/math.js");
rutaProcess.get("/info", function (req, res) {
  res.json({
    Argumentos_de_entrada: args,
    Path_de_ejecucion: process.cwd(),
    Id_del_Proceso: process.pid,
    Version_deNode: process.version,
    Titulo_del_proceso: process.tittle,
    Sistema_operativo: process.platform,
    Uso_de_memoria: process.memoryUsage()
  });
});
module.exports = rutaProcess;
rutaProcess.get("/randoms", function (req, res) {
  var cantidad;
  req.query.cant ? cantidad = req.query.cant : cantidad = 100000000;
  var computo = fork(scriptPath);
  computo.send(cantidad);
  computo.on("message", function (resultado) {
    res.json({
      números: resultado
    });
  });
});