import express from "express";
import homeController from "../controllers/homeController";
import houseController from "../controllers/houseController";
import methodOverride from "method-override";
import apiController from "../controllers/apiController";

const router = express.Router();
router.use(methodOverride("_method"));

const initApiRoutes = (app) => {
  router.post("/register", apiController.register);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
