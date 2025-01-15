import express from "express";
import homeController from "../controllers/homeController";
import houseController from "../controllers/houseController";
import methodOverride from "method-override";

const router = express.Router();
router.use(methodOverride('_method'));

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage); // Hiển thị trang chính của website (Home Page)
  router.get("/user", homeController.getUserPage); 
  router.get("/house/:id", homeController.getHousePage);//Hiển thị thông tin chi tiết của một ngôi nhà cụ thể dựa trên id
  router.get("/login", homeController.getLoginPage);
  router.get("/register", homeController.getRegisterPage);

  router.post('/houses', houseController.createHouse); //Xử lý việc thêm một ngôi nhà mới vào cơ sở dữ liệu
  router.get('/houses', houseController.getAllHouses); //Hiển thị danh sách tất cả ngôi nhà
  router.get('/houses/:id', houseController.getHouseById); //Lấy dữ liệu chi tiết của một ngôi nhà thông qua API hoặc giao diện
  router.put('/houses/:id', houseController.updateHouse); //Xử lý yêu cầu cập nhật thông tin của một ngôi nhà
  router.delete('/houses/:id', houseController.deleteHouse); //Xử lý yêu cầu xóa một ngôi nhà cụ thể
  router.post('/houses/:house_id/comments', houseController.addComment); //Thêm bình luận cho một ngôi nhà cụ thể

  return app.use("/", router);
};

export default initWebRoutes;
