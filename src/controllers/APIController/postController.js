import postService from "../../service/FE/postService";

const fetchDistricts = async (req, res) => {
  // console.log(">>> check data: ", req.query);
  try {
    const { city } = req.query;
    let data = await postService.fetchDistricts(city);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const fetchAllPost = async (req, res) => {
  try {
    // console.log(">>> Cookies: ", req.cookies);
    // console.log(">>> check query: ", req.query);
    let data = await postService.fetchAllPost(req.query);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

const uploadAPost = async (req, res) => {
  try {
    console.log(">>> check req.body: ", req.body);

    let data = await postService.uploadAPost(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(">>> catch error from postController: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: "-2",
      DT: "",
    });
  }
};

module.exports = { fetchAllPost, uploadAPost, fetchDistricts };
