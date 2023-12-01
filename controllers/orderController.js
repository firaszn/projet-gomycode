const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;
    const order = new Order({ userId, items });
    await order.save();
    res.status(201).send({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
