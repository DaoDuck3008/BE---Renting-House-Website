import express from "express";
import homeController from "../controllers/homeController";
import searchController from "../controllers/searchController";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user", homeController.getUserPage);
  router.get("/house", homeController.getHousePage);
  router.get("/login", homeController.getLoginPage);
  router.get("/register", homeController.getRegisterPage);

  // mở danh sách tất cả nhà trọ
  router.get("/search/:district_id?", searchController.handleFindAllHouses);
  // tìm kiếm theo quận/ huyện

  return app.use("/", router);
};

export default initWebRoutes;
