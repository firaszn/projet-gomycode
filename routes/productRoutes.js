const express = require('express');
const router = express.Router();
const Car = require('../models/Product');
const cors = require('cors'); 

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router.use(cors(corsOptions));

router.get("/getCars", getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).send({ msg: "car added", cars });
  } catch (error) {
    res.status(500).send({ msg: "Contact not added", error});
  }
});

router.get('/getcarByid/:id', getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId);

    if (!car) {
      return res.status(404).json({ msg: "Car not found" });
    }
    

    res.status(200).send({ msg: "car getted", car });
  } catch (error) {
    res.status(400).send({ error: 'Internal Server Error' });
  }
});

router.post('/addcars',  addCar = async (req, res) => {
  try {
    const { brand, model, year, color, price, transmission, image } = req.body;
    const car = new Car({ brand, model, year, color, price, transmission, image });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/updatecars/:id', updateCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const { brand, model, year, color, price, transmission, image } = req.body;
    
    const updatedCar = await Car.findByIdAndUpdate(
      carId,
      { brand, model, year, color, price, transmission, image },
      { new: true } 
    );

    if (!updatedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/deletecars/:id' ,deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports = router;
