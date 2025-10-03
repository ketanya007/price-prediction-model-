const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../helpers/env");

const isLoggedIn = (req, res, next) => {
    try {
        if (req.user) {
            next();
        }
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied.", success: false });
        }
        token = token.split(' ')[1];
        const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decodedToken.user;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Invalid token, authorization denied.", success: false })
    }
}

module.exports = isLoggedIn;