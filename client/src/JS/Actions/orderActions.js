// In your orderActions.js file
import { PLACE_ORDER, ORDER_SUCCESS, ORDER_FAILURE } from '../Actiontypes/order';

export const placeOrderAsync = (orderDetails) => async (dispatch) => {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });

    if (!response.ok) {
      throw new Error('Failed to place order');
    }

    dispatch(orderSuccess());
  } catch (error) {
    dispatch(orderFailure(error.message));
  }
};

export const orderSuccess = () => ({
  type: ORDER_SUCCESS,
});

export const orderFailure = (error) => ({
  type: ORDER_FAILURE,
  payload: error,
});
