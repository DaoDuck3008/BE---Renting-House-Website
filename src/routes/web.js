import express from "express";
import homeController from "../controllers/homeController";
import houseController from "../controllers/houseController";
import methodOverride from "method-override";
const upload = require('../middlewares/upload');
const router = express.Router();
router.use(methodOverride('_method')); // Hỗ trợ PUT/DELETE từ form HTML

const initWebRoutes = (app) => {
  // Trang chính và các trang cơ bản
  router.get("/", homeController.getHomePage); // Hiển thị trang chính
  router.get("/user", homeController.getUserPage); // Hiển thị thông tin người dùng
  router.get("/login", homeController.getLoginPage); // Hiển thị trang đăng nhập
  router.get("/register", homeController.getRegisterPage); // Hiển thị trang đăng ký

  // Quản lý nhà
  router.get("/houses", houseController.getAllHouses); // Hiển thị danh sách tất cả nhà
  router.post("/houses", houseController.createHouse); // Tạo một ngôi nhà mới

  // Hiển thị chi tiết của một ngôi nhà
  router.get("/houses/:id", houseController.getHouseById);

  // Cập nhật thông tin ngôi nhà
  router.put("/houses/:id", houseController.updateHouse);

  // Xóa ngôi nhà
  router.delete("/houses/:id", houseController.deleteHouse);

  // Thêm bình luận vào một ngôi nhà cụ thể
  router.post("/houses/:house_id/comments", houseController.addComment);


  // Sử dụng middleware để xử lý upload ảnh trong route
  router.post('/houses', upload.single('image'), houseController.createHouse);
  return app.use("/", router);
};

export default initWebRoutes;
