const express = require('express');
const router = express.Router();
const cors = require('cors');
const cartController = require('../controllers/CartController');
const isAuth = require('../middlewares/isAuth');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Apply CORS middleware at the top
router.use(cors(corsOptions));

// Route for adding items to the cart
router.post('/addToCart', isAuth, cartController.addToCart);

module.exports = router;
