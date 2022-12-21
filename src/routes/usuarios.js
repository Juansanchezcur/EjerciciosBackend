import passport from "passport";
import { Router } from "express";
import { signUp, login, getHome } from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/user.middlewares.js";

const rutaUsuarios = Router();

const passportOptions = { badRequestMessage: "falta username / password" };

rutaUsuarios.post("/signup", signUp);

rutaUsuarios.post(
  "/login",
  passport.authenticate("login", passportOptions),
  login
);

rutaUsuarios.get("/home", isLoggedIn, getHome);

module.exports = rutaUsuarios;
