import Router from "koa-router";
import {
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = new Router({
  prefix: "/products",
});

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.post("/", addProduct);

router.put("/:id", editProduct);

router.delete("/:id", deleteProduct);

export default router.routes();
