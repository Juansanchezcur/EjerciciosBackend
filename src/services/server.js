const express = require("express");
require("dotenv").config();
const RouterPrincipal = require("../routes/index");
import session from "express-session";
import passport from "passport";
import { loginFunc, signUpFunc } from "./auth.js";
import MongoStore from "connect-mongo";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const ttlSeconds = 300;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_ATLAS,
  }),
  secret: "secretString",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));

app.use(passport.initialize());

app.use(passport.session());

passport.use("login", loginFunc);
passport.use("signup", signUpFunc);

app.use("/api", RouterPrincipal);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    msg: "Tuvimos un problema",
  });
});

module.exports = app;
