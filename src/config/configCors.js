require("dotenv").config();

const configCors = (app) => {
  app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      process.env.REACT_URL || "http://localhost:3000"
    ); // Thay thế bằng URL thực tế của frontend
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true"); // ✅ Cho phép gửi cookie

    // Bắt lỗi Preflight Request
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }

    next();
  });
};

export default configCors;
