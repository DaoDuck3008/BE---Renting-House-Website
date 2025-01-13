const getHomePage = async (req, res) => {
  try {
    const { House } = require('../models'); // Lấy model House từ DB
    const houses = await House.findAll(); // Lấy tất cả các nhà từ cơ sở dữ liệu
    res.render('home', { houses: houses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getUserPage = (req, res) => {
  return res.render("user.ejs");
};

const getHousePage = async (req, res) => {
  try {
    const { House } = require('../models'); // Lấy model House từ DB
    const house = await House.findByPk(req.params.id); // Lấy nhà theo ID từ URL (nếu có)

    if (!house) {
      return res.status(404).send('House not found');
    }

    res.render("house.ejs", { house: house }); // Truyền đối tượng house vào view
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getLoginPage = (req, res) => {
  return res.render("login.ejs");
};

const getRegisterPage = (req, res) => {
  return res.render("Register.ejs");
};





module.exports = {
  getHomePage,
  getUserPage,
  getHousePage,
  getLoginPage,
  getRegisterPage,
};
