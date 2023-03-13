import Router from "koa-router";
import ProductsRouter from "./products.js";

const router = new Router({
  prefix: "/api",
});

router.use(ProductsRouter);

export default router.routes();
