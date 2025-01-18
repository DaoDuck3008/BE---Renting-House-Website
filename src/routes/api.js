import express from "express";
import homeController from "../controllers/homeController";
import houseController from "../controllers/houseController";
import methodOverride from "method-override";

const router = express.Router();
router.use(methodOverride('_method'));

const initApiRoutes = (app) => {
 

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
