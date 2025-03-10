import express from "express";
import methodOverride from "method-override";
import LoginRegisterController from "../controllers/APIController/LoginRegisterController";
import postController from "../controllers/APIController/postController";
import houseController from "../controllers/houseController";
import JWTAction from "../middlewares/JWTAction";

const router = express.Router();
router.use(methodOverride("_method"));

const initApiRoutes = (app) => {
  // USER
  router.post("/register", LoginRegisterController.register); //api đăng kí người dùng
  router.post("/login", LoginRegisterController.login); //api đăng nhập
  router.get("/logout", LoginRegisterController.logOut); //api xóa cookie chứa thông tin người dùng sau khi đăng xuất
  router.get("/get/user-info", LoginRegisterController.getUserInfo); //api lấy thông tin người dùng sau khi đăng nhập
  router.patch("/update/user-info", LoginRegisterController.updateUserInfo); //api cập nhật thông tin người dùng

  //
  // DISTRICTS
  router.get("/districts/read", postController.fetchDistricts); //api lấy toàn bộ các quận huyện thuộc 1 thành phố

  //
  // HOUSE
  router.get("/posts/read", postController.fetchAllPost); //api gửi đi tất cả post (house)
  router.get("/posts/read-all", postController.fetchAllPostWithoutPagination);
  router.post("/posts/upload", postController.uploadAPost); //api đăng tin bài viết thuê nhà
  router.post("/posts/update", postController.updatePost); // cập nhật bài đăng
  router.delete("/posts/delete/:id", postController.deletePost); // xóa bài đăng
  router.get("/house/:id", postController.fetchAPost); // api xem danh sách nhà trọ
  router.get("/posts/read/byUserId", postController.fetchPostByUserId); //api xem danh sách nhà trọ theo id

  //
  // COMMENT
  router.post("/comment/house/:id", houseController.addCommentByUser); // api thêm comment vào bài đăng
  router.delete(
    "/comment/house/:commentId",
    JWTAction.authenticateUser,
    houseController.deleteCommentByUser
  );

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
