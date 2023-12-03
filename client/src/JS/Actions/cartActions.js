export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_CART = 'DECREASE_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });
  
  export const decreaseCart = (product) => ({
    type: 'DECREASE_CART',
    payload: product,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
  
  export const getTotals = () => ({
    type: 'GET_TOTALS',
  });
  