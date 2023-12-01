const CartItem = require('../models/CartItem');

exports.addToCart = async (req, res) => {
  try {
    const { userId, carId } = req.body;

      const newitem =  await CartItem.create({ userId, carId });
      await newitem.save(); 

      res.status(200).send({ message: 'Item added to the cart successfully' , newitem});

    }
     catch (error) { 
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

