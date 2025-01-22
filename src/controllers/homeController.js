const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getUserPage = (req, res) => {
  return res.render("user.ejs");
};

const getHousePage = (req, res) => {
  return res.render("house.ejs");
};

const getLoginPage = (req, res) => {
  return res.render("login.ejs");
};

const getRegisterPage = (req, res) => {
  return res.render("Register.ejs");
};

const getSearchPage = (req, res) => {
  return res.render("search.ejs");
};

module.exports = {
  getHomePage,
  getUserPage,
  getHousePage,
  getLoginPage,
  getRegisterPage,
  getSearchPage,
};
