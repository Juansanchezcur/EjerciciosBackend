import { Router } from "express";
const router = Router();
import { login, logout, visit } from "../controllers/user.controllers.js";
import { validateLogIn } from "../middlewares/middlewares.js";

router.post("/login", login);

router.get("/secret-endpoint", validateLogIn, visit);

router.post("/logout", validateLogIn, logout);

export default router;
