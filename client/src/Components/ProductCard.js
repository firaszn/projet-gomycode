import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addToCart } from '../JS/Actions/product';

const ProductCard = ({ car}) => {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.userReducer.userId);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const handleAddToCart = () => {
    isAuth
      ? dispatch(addToCart(userid, car._id))
      : console.log("User is not authenticated");
  };

  return (
    <Card style={{display :'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      <CardContent >
        <div>
          <img
            src={car.image}
            alt={car.brand}
            style={{ objectFit: 'cover', maxHeight: '120px', width: '100%' }}
          />
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Brand: {car.brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Year: {car.year}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: $ {car.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart} >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
