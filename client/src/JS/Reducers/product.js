import {
  LOAD_CARS,
  FAIL_CARS,
  GET_ALL_CARS,
  
  ADD_TO_CART,
} from '../Actiontypes/product';
const initialState = {
  carslist: [],
  cart: [], 
  item: {},
  loading: false,
  neworder:{},
  error: null
};


const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CARS:
      return { ...state, loading: true, error: null };
    case GET_ALL_CARS:
      return { ...state, loading: false, carslist: payload.cars };
      case ADD_TO_CART:
        return  { ...state, loading: false, item: payload.newitem };
    
    case FAIL_CARS:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default carReducer;
