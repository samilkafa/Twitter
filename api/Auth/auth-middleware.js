const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../../config");
const restricted = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, JWT_SECRET, (error, decodedJWT) => {
                if (!error) {
                    req.decodedJWT = decodedJWT;
                    next();
                } else {
                    next(error)
                }
            })
        } else {
            next({ status: 400, message: "Token required!.."});
        }
    } catch (error) {
        next(error)
    }

}

const generateToken = (user) => {
    const payload = {
        id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name
    }
    const options = {
        expiresIn: "3h"
    }
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
}
module.exports = {
    restricted,
    generateToken
}