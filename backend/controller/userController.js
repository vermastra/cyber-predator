const User=require("../models/userModel");

//register user
exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password,role } = req.body;
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        sendToken(user, 201, res)

    } catch (err) {
        res.send(err.message);
    }
}


//login user
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //checkng if user has entered both email and password
        if (!email || !password) {
            return res.status(500).json({
                success: false,
                message: "Please Enter Email and Password"
            })
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Enter Email or Password"
            })
        }

        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "Invalid Enter Email or Password"
            })
        }

        sendToken(user, 200, res);

    } catch (err) {
        res.send(err.message);
    }
}

//logout user
exports.logout = async (req, res, next) => {
    try {
        res.cookie("cyber_predator", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({
            success: true,
            message: "Logged Out",
        });

    } catch (err) {
        res.send(err.message);
    }

}

//get single user detail --ADMIN
exports.getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(500).json({
                success: false,
                message: `User doesn't exist with id ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (err) {
        res.send(err.message);
    }
}

//get user details
exports.getUserDetails = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            success: true,
            user,
        })
    } catch (err) {
        res.send(err.message);
    }
}


//JWT
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    //options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
    }

    res.status(statusCode).cookie("cyber_predator",token,options).json({
        success: true,
        user,
        token,
    })
}