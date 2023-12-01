import React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);

 

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Your Cart
      </Typography>

      {cart.map((item) => (
  <Card key={item.id} sx={{ marginBottom: '20px' }}>
    <img
      src={item.image}
      alt={item.brand}
      style={{ width: '200px', height: 'auto', marginRight: '10px' }}
    />
          <CardContent>
            <Typography variant="h5" component="div">
              Brand: {item.brand}
            </Typography>
            <Typography>
              Price: ${item.price}
              <br />
              Year: {item.year}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="outlined" color="secondary" >
              Remove
            </Button>
            {cart.length > 0 && (
        <div>
        
        
        </div>
      )}
          </CardActions>
        </Card>
      ))}


    </div>
  );
};

export default Cart;

