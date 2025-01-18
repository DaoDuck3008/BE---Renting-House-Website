import express from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import connection from "./config/connectDB";
import path from 'path'; 
import methodOverride from "method-override";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9091;

//config view engine
configViewEngine(app);
//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware để hỗ trợ method PUT và DELETE từ form HTML
app.use(methodOverride('_method')); 

//check connect DB
connection();

// Cấu hình express để sử dụng thư mục uploads làm static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//initWebRoutes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> Running on port: ", PORT);
});
