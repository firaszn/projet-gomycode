import { ORDER_FAILURE, ORDER_SUCCESS, PLACE_ORDER } from "../Actiontypes/order";

const initialState = {
    cart: {
      cartItems: [],
      cartTotalAmount: 0,
      cartTotalQuantity: 0,
    },
    order: null, // New property to store order details
    orderError: null, // New property to store order placement error
  };
  
  const findCartItemIndex = (cartItems, product) =>
    cartItems.findIndex((item) => item.id === product.id);
  
    const cartReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'ADD_TO_CART':
            const existingIndex = findCartItemIndex(state.cart.cartItems, action.payload);
      
            if (existingIndex !== -1) {
              // Item already exists, increase quantity
              const updatedCartItems = state.cart.cartItems.map((item, index) =>
                index === existingIndex
                  ? { ...item, cartQuantity: item.cartQuantity + 1 }
                  : item
              );
      
              return {
                ...state,
                cart: {
                  ...state.cart,
                  cartItems: updatedCartItems,
                  cartTotalQuantity: state.cart.cartTotalQuantity + 1,
                  cartTotalAmount: state.cart.cartTotalAmount + action.payload.price,
                },
              };
            } else {
              // Item is not in the cart, add it
              return {
                ...state,
                cart: {
                  ...state.cart,
                  cartItems: [...state.cart.cartItems, { ...action.payload, cartQuantity: 1 }],
                  cartTotalQuantity: state.cart.cartTotalQuantity + 1,
                  cartTotalAmount: state.cart.cartTotalAmount + action.payload.price,
                },
              };
            }
      
          case 'REMOVE_FROM_CART':
            return {
              ...state,
              cart: {
                ...state.cart,
                cartItems: state.cart.cartItems.filter((item) => item.id !== action.payload.id),
                cartTotalQuantity: state.cart.cartTotalQuantity - action.payload.cartQuantity,
                cartTotalAmount: state.cart.cartTotalAmount - (action.payload.price * action.payload.cartQuantity),
              },
            };
      
          case 'DECREASE_CART':
            return {
              ...state,
              cart: {
                ...state.cart,
                cartItems: state.cart.cartItems.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, cartQuantity: Math.max(item.cartQuantity - 1, 0) }
                    : item
                ),
                cartTotalQuantity: state.cart.cartTotalQuantity - 1,
                cartTotalAmount: state.cart.cartTotalAmount - action.payload.price,
              },
            };
  
      case 'CLEAR_CART':
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [],
            cartTotalQuantity: 0,
          },
        };
  
        case 'GET_TOTALS':
            const { total, quantity } = state.cart.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
          
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
          
                return cartTotal;
              },
              { total: 0, quantity: 0 } 
            );
          
            return {
              ...state,
              cart: {
                ...state.cart,
                cartTotalQuantity: quantity,
                cartTotalAmount: total,
              },
            };
            case PLACE_ORDER:
      // Handle placing order, possibly update state with order details
      return {
        ...state,
        order: action.payload,
        orderError: null, // Clear any previous order placement errors
      };

    case ORDER_SUCCESS:
      // Handle order success, possibly clear the cart or perform other actions
      return {
        ...state,
        order: null, // Reset order details after success
      };

    case ORDER_FAILURE:
      // Handle order failure, store the error message
      return {
        ...state,
        orderError: action.payload,
      };
          
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  