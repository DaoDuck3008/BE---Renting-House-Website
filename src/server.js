import express from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/configCors";
import connection from "./config/connectDB";
import path from "path";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2000;

//config CORS
configCors(app);

//config view engine
configViewEngine(app);
//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// Middleware để hỗ trợ method PUT và DELETE từ form HTML
app.use(methodOverride("_method"));

//check connect DB
connection();

//initWebRoutes
initWebRoutes(app);
//initAPIRoutes
initApiRoutes(app);

app.listen(PORT, () => {
  console.log(">>> Running on port: ", PORT);
});
