const app = require('./app');
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

const connectDataBase = require("./config/database");

//connecting to database
connectDataBase();

//config
dotenv.config({ path: ".env" });

//cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT}`)
})