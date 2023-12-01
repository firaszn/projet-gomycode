import axios from 'axios';
import {
  LOAD_CARS,
  FAIL_CARS,
  GET_ALL_CARS,
  ADD_TO_CART,
  

} from '../Actiontypes/product';


export const getCars = () => async (dispatch) => {
    dispatch({ type: LOAD_CARS });
    try {
      let result = await axios.get("/api/car/getCars");
      dispatch({ type: GET_ALL_CARS, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CARS, payload: error.response });
    }
  };

  
export const addToCart = (newitem) => async (dispatch) => {
  dispatch({ type: LOAD_CARS });

  try {
    const response = await axios.post("/api/cart/addToCart", newitem);
    dispatch({ type: ADD_TO_CART, payload: response.data });
  } catch (error) {
    dispatch({ type: FAIL_CARS, payload: error.response });
  }
};