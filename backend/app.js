const express = require("express")
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload");
const app = express();

//config
dotenv.config({ path: ".env" })

app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());

//routes
const user=require("./routes/userRoutes")
const report=require("./routes/reoprtRoute")

app.use("/api/v1", report);
app.use("/api/v1", user);

module.exports = app;
