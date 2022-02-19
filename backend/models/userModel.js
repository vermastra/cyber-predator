const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        minlength: [3, "Name should have more than 2 characters"],
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minlength: [8, "Password should be Greater than 8 Characters"],
        select: false,
    },

    role: {
        type: String,
        default: "user",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

//hashing the password
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//JWT Token Generate
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("user", userSchema);