const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

require("dotenv").config();

app.use(express.json());
const connectDB = require("./config/connectDB");
connectDB();

app.use('/api/user', require('./routes/user'));

app.use('/api/car', require('./routes/productRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));
app.use('/api/cart', require('./routes/CartRoutes'));

const PORT = process.env.PORT ; 

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Error starting server: ${error}`);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
