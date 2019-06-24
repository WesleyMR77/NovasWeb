const jwt = require("jsonwebtoken");

const User = require("../models/user");
const authConfig = require("../config/auth.json");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(401).send({ error: "No token provided" });
    } 

    const parts = authHeader.split(" ");

    if (!parts.length === 2) {
        return res.status(401).send({ error: "Token error" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ error: "Token malformatted" });
    }
        

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err){
            return res.status(401).send({ error: "Token invalid" });
        }

    req.userId = decoded.id;
    return next();
  });
};

const verifyAdmin = (req, res, next) => {
    const user = await User.findById(req.userId);
    
    if(user.adminAccount){
        next();
    }else{
        return res.send({ error: "Not Admin" });
    }
};

module.exports = {
    verifyToken,
    verifyAdmin
};
