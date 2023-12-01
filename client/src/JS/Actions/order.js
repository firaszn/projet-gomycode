import axios from 'axios';
import { PLACE_ORDER } from '../Actiontypes/product';

export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const result = await axios.post("/api/order/placeOrder", orderData);
    dispatch({ type: PLACE_ORDER, payload: result.data.order });
  } catch (error) {
    console.error('Error placing order:', error);
  }
};
