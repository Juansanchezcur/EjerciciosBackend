"use strict";

var express = require("express");
var RouterPrincipal = require("../routes/index");
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]("public"));
app.use("/api", RouterPrincipal);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    msg: "Tuvimos un problema"
  });
});
module.exports = app;