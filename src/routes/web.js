import express from "express";
import homeController from "../controllers/homeController";
import houseController from "../controllers/houseController";
import methodOverride from "method-override"; //để sử dụng được POST, DELETE TRONG HTML
const router = express.Router();

// Sử dụng method-override
router.use(methodOverride('_method')); // Tạo route hỗ trợ PUT, DELETE thông qua _method trong query hoặc body

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user", homeController.getUserPage);
  router.get("/house", homeController.getHousePage);
  router.get("/login", homeController.getLoginPage);
  router.get("/register", homeController.getRegisterPage);

  router.post('/houses', houseController.createHouse); // Tạo bài đăng mới
  router.get('/houses', houseController.getAllHouses); // Lấy danh sách bài đăng
  router.get('/houses/:id', houseController.getHouseById); // Lấy thông tin chi tiết bài đăng
  router.put('/houses/:id', houseController.updateHouse); // Cập nhật thông tin bài đăng
  router.delete('/houses/:id', houseController.deleteHouse); // Xóa bài đăng
  router.post('/houses/:house_id/comments', houseController.addComment); //Thêm bình luận

  return app.use("/", router);
};

export default initWebRoutes;
