const User = require("../models/Userr");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { firstName, name, email, password } = req.body;
        const foundUser = await User.findOne({ email });

        if (foundUser) {
            return res.status(400).send({ msg: 'Email already exists' });
        }

        const saltrounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltrounds);

        const newUser = new User({
            firstName,
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const token = jwt.sign({
            id: newUser._id
        }, process.env.SCRT_KEY, { expiresIn: "240h" });

        return res.status(200).send({ msg: "Welcome to our application", user : newUser, token });
    } catch (error) {
        return  res.status(400).send({ msg: "Try again, please" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            return res.status(404).send({ msg: 'User not found. Register or try again.' });
        }

        const checkPassword = await bcrypt.compare(password, foundUser.password);

        if (!checkPassword) {
            return res.status(400).send({ msg: 'Please check your password.' });
        }

        const token = jwt.sign({
            id: foundUser._id
        }, process.env.SCRT_KEY, { expiresIn: "240h" });

        return  res.status(200).send({ msg: 'Welcome back', user: foundUser, token });

    } catch (error) {
        return  res.status(400).send({ msg: 'Try again, please.' });
    }
};
