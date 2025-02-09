const db = require("../models");
const { House, Room, Comment } = db;

const houseController = {
  createHouse: async (req, res) => {
    try {
      const { house_name, address, number_of_room, owner_id, area, cost } =
        req.body;

      const image = req.file ? `/uploads/${req.file.filename}` : null;

      const newHouse = await House.create({
        house_name,
        address,
        number_of_room,
        owner_id,
        area,
        cost,
        image,
        created_date: new Date(),
      });

      return res.redirect("/houses"); // Chuyển về trang danh sách houses sau khi tạo
    } catch (error) {
      console.error("Error creating house:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy danh sách tất cả bài đăng nhà
  getAllHouses: async (req, res) => {
    try {
      const houses = await House.findAll();
      return res.render("home", { houses });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy thông tin chi tiết một bài đăng nhà theo ID
  getHouseById: async (req, res) => {
    try {
      const { id } = req.params;
      const house = await House.findByPk(id, {
        // include: [
        //   {
        //     model: Room,
        //     as: 'rooms',
        include: [
          {
            model: Comment,
            as: "comments",
          },
        ],
        //   },
        // ],
      });
      console.log("House details:", house);

      if (!house) {
        return res.status(404).render("404", { message: "House not found" });
      }

      res.render("house", { house });
    } catch (error) {
      // console.error('Error fetching house by ID:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
  //MVC

  // Cập nhật thông tin bài đăng nhà
  updateHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const { house_name, address, number_of_room } = req.body;

      const bodyUpdate = {
        house_name,
        address,
        number_of_room,
      };

      if (req.file) {
        const image = `/uploads/${req.file.filename}`;
        bodyUpdate.image = image;
      }

      const house = await House.findByPk(id);
      // console.log('Found House:', house);
      if (!house) {
        return res
          .status(404)
          .json({ success: false, message: "House not found" });
      }

      await house.update(bodyUpdate);

      return res.redirect("/houses");
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Xóa bài đăng nhà
  deleteHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const house = await House.findByPk(id);

      if (!house) {
        return res
          .status(404)
          .json({ success: false, message: "House not found" });
      }

      await house.destroy();
      return res.redirect("/houses");
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Thêm bình luận cho bài đăng nhà
  addComment: async (req, res) => {
    try {
      const { house_id } = req.params;
      const { rating, description, rater_id } = req.body;

      //tạo 1 bình luận mới
      await Comment.create({
        house_id, // gắn với house_id
        rater_id,
        rating,
        description,
        created_date: new Date(),
      });

      return res.redirect(`/houses/${house_id}`);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = houseController;
