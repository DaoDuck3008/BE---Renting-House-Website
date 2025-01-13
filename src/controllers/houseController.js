const db = require('../models'); // Import tất cả các models qua index.js
const { House } = db; // Lấy model House từ db
const { Comment } = require('../models');

const houseController = {
  // Tạo bài đăng nhà mới
  createHouse: async (req, res) => {
    try {
      const { house_name, address, number_of_room, owner_id, image } = req.body;

      // Sử dụng ORM để tạo bài đăng
      const newHouse = await House.create({
        house_name,
        address,
        number_of_room,
        owner_id,
        image,
        created_date: new Date(),
      });

      // Sau khi tạo thành công, có thể render lại trang danh sách nhà hoặc thông báo thành công
      return res.redirect('/houses'); // Redirect đến trang danh sách nhà hoặc render lại home.ejs
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy danh sách tất cả bài đăng nhà
  getAllHouses: async (req, res) => {
    try {
      const houses = await House.findAll(); // Lấy tất cả các bản ghi trong bảng Houses
      console.log(houses);
      // Render trang hiển thị danh sách các nhà
      return res.render('home', { houses });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy thông tin chi tiết một bài đăng nhà theo ID
  getHouseById: async (req, res) => {
    try {
      const { id } = req.params;

      // Tìm ngôi nhà theo ID và bao gồm các phòng và bình luận
      const house = await House.findByPk(id, {
        include: [
          {
            model: Room,
            as: 'rooms', // Tên alias của quan hệ, cần phải khai báo trong model
            include: [
              {
                model: Comment,
                as: 'comments', // Tên alias của quan hệ bình luận, cũng cần khai báo trong model
              }
            ]
          }
        ]
      });

      if (!house) {
        return res.status(404).json({ success: false, message: 'House not found' });
      }

      // Render trang chi tiết ngôi nhà
      return res.render('house', { house });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Cập nhật thông tin bài đăng nhà
  updateHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const { house_name, address, number_of_room, image } = req.body;

      // Tìm bài đăng theo ID
      const house = await House.findByPk(id);

      if (!house) {
        return res.status(404).json({ success: false, message: 'House not found' });
      }

      // Cập nhật bài đăng
      await house.update({
        house_name,
        address,
        number_of_room,
        image,
      });

      return res.redirect('/houses'); // Sau khi cập nhật, redirect đến trang danh sách nhà
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  // Xóa bài đăng nhà
  deleteHouse: async (req, res) => {
    try {
      const { id } = req.params;

      // Tìm bài đăng theo ID
      const house = await House.findByPk(id);

      if (!house) {
        return res.status(404).json({ success: false, message: 'House not found' });
      }

      // Xóa bài đăng
      await house.destroy();

      return res.redirect('/houses'); // Redirect về trang danh sách nhà sau khi xóa
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  addComment: async (req, res) => {
    try {
      const { house_id } = req.params;
      const { rating, description, rater_id } = req.body;

      // Tạo bình luận mới
      await Comment.create({
        room_id: house_id,
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