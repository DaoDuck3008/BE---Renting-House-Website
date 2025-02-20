import express from "express";
import methodOverride from "method-override";
import apiController from "../controllers/APIController/LoginRegisterController";
import postController from "../controllers/APIController/postController";
import houseController from "../controllers/houseController";
import userController from "../controllers/userController";

const router = express.Router();
router.use(methodOverride("_method"));

const initApiRoutes = (app) => {
  //api đăng kí đăng nhập
  router.post("/register", apiController.register);
  router.post("/login", apiController.login);
  //api lấy thông tin người dùng sau khi đăng nhập
  router.get("/get/user-info", apiController.getUserInfo);
  //api cập nhật thông tin người dùng
  router.patch("/update/user-info", userController.updateUserInfo);
  //api xóa cookie chứa thông tin người dùng sau khi đăng xuất
  router.get("/logout", apiController.logOut);

  //api gửi đi tất cả post (house)
  router.get("/posts/read", postController.fetchAllPost);
  //api đăng tin bài viết thuê nhà
  router.post("/posts/upload", postController.uploadAPost);

  //api lấy toàn bộ các quận huyện thuộc 1 thành phố
  router.get("/districts/read", postController.fetchDistricts);

  // api thêm comment vào bài đăng
  router.post("/comment/house/:id", houseController.addCommentByUser);
  // api xem danh sách nhà trọ
  router.get("/house/:id", houseController.getHouseById);
  //api xem danh sách nhà trọ theo id
  router.get("/house/byUserId/:userId", houseController.getHouseByUserId);

  router.patch("/house/:id", houseController.updateHouseAPI);   // cập nhật bài đăng
  router.delete("/house/:id", houseController.deleteHouse);  // xóa bài đăng
 

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
