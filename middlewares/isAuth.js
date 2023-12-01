const User = require("../models/Userr");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(400).send({ msg: 'Not authorized' });
        }

        const decoded = jwt.verify(token, process.env.SCRT_KEY);
        const foundUser = await User.findOne({ _id: decoded.id });

        if (!foundUser) {
            return res.status(400).send({ msg: 'Not authorized 1' });
        }

        req.user = foundUser;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(400).send({ msg: 'Not authorized. Invalid token.' });
    }
};

module.exports = isAuth;
