const express = require('express');
const app = express();
const cors = require('cors');
const products = require('./products'); // Assuming products.js is in the same directory as this file
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
require("dotenv").config();

app.use(express.json());
const connectDB = require("./config/connectDB");
connectDB();

app.use('/api/user', require('./routes/user'));

app.get('/products', (req, res) => {
    res.send(products);
});
app.use(bodyParser.json());

const orderSchema = new mongoose.Schema({
  items: [{ name: String, quantity: Number, price: Number }],
  totalAmount: Number,
});

const Order = mongoose.model('Order', orderSchema);
app.post('/api/orders', async (req, res) => {
  try {
    const orderDetails = req.body;
    const order = new Order(orderDetails);
    const savedOrder = await order.save();

    res.json(savedOrder);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Error starting server: ${error}`);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
