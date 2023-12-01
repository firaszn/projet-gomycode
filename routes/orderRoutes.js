const express = require('express');
const router = express.Router();
const Order = require('../controllers/orderController');
const isAuth = require('../middlewares/isAuth');
const cors = require('cors'); 

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router.use(cors(corsOptions));

router.post('/placeOrder', isAuth, Order.placeOrder);

module.exports = router;
