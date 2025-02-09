import postService from "../../service/FE/postService";

const fetchAllPost = async (req, res) => {
  try {
    let data = await postService.fetchAllPost();
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

module.exports = { fetchAllPost };
