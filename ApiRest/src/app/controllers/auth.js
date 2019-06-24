const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const userController = require("./user");
const authConfig = require("../../config/auth.json");

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {});
};

const register = async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email })){
            return res.status(400).send({ error: "User already exists" });
        };

        var authUser;
        if(req.body.adminAccount == ""){
            authUser = userController.create(false);
        }else if (req.body.adminAccount == "YconMaster") {
            authUser = userController.create(true);
        }else{
            return res.send({ error: "Admin password incorrect"});
        }

        authUser.password = undefined;

        return res.send({
            authUser,
            token: generateToken({ id: authUser.id })
        });
    } catch (err) {
        return res.status(400).send({ error: "Registration failed" });
    }
};

const authenticate = async (req, res) => {
    const { email, password } = req.body;

    const authUser = await User.findOne({ email }).select("+password");

    if (!authUser){
        return res.status(400).send({ error: "User not found" });
    } 

    if (!(await bcrypt.compare(password, authUser.password))){
        return res.status(400).send({ error: "Invalid password" });
    };
    
    authUser.password = undefined;

    res.send({
        authUser,
        token: generateToken({ id: authUser.id })
    });
};

const logout = async (req, res) => {

};

module.exports = {
  register,
  authenticate,
  logout
};
