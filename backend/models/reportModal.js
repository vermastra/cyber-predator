const mongoose = require('mongoose');
const validator = require('validator');

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        minlength: [3, "Name should have more than 2 characters"],
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },

    contactNo: {
        type: Number,
        required: [true, "Please Enter Your Contact number"],
        length: [10, "Contact number must have exactly 10 digits"],
    },

    address: {
        type: String,
        required: [true, "Please enter adderss"],
    },

    postal: {
        type: String,
        required: [true, "Please enter postal adderss"],
    },

    crimeType: {
        type: String,
        required: [true, "Please select Crime Type"],
    },

    status: {
        type: String,
        default:"active"
    },

    platform: {
        type: String,
        required: [true, "Please name the platform"],
    },

    subject: {
        type: String,
        required: [true, "Please enter the subject"],
    },

    discription: {
        type: String,
        required: [true, "Please select discription"],
    },

    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],

    user:{ //to know which user ceated this product
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("report", reportSchema);