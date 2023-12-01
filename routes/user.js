const express = require('express');
const { register, login } = require('../controllers/user');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();
const { registervalidator } = require("../middlewares/Validator");
const {loginvalidator} =require("../middlewares/Validator");
const {validation} =require("../middlewares/Validator");
const cors = require('cors'); 

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router.use(cors(corsOptions));


router.post("/register", registervalidator(), validation, register);
router.post("/login",loginvalidator(),validation, login);

router.get("/current", isAuth, (req, res) => {
    res.send(req.user);
});

module.exports = router;
