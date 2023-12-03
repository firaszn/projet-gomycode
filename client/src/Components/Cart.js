
// Cart.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart
} from '../JS/Actions/cartActions';
import './Cart.css';
import { placeOrderAsync } from '../JS/Actions/orderActions';

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  // Calculate totals directly inside the component
  const { total, quantity } = cart.cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += cartQuantity;

      return cartTotal;
    },
    { total: 0, quantity: 0 }
  );


  const handleRemoveCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  const handlePlaceOrder = () => {
    const orderDetails = {
      items: cart.cartItems.map((item) => ({
        name: item.name,
        quantity: item.cartQuantity,
        price: item.price,
      })),
      totalAmount: cart.cartTotalAmount,
    };

    // Dispatch the asynchronous placeOrder action
    dispatch(placeOrderAsync(orderDetails));

    // Clear the cart after placing the order
    dispatch(clearCart());
  };

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {cart && cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is currently empty</p>
          <div className='start-shopping'>
            <Link to='/list'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill='currentColor'
                className='bi bi-arrow-bar-left'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z'
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='titles'>
            <h3 className='product-title'>Product</h3>
            <h3 className='price'>Price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Total</h3>
          </div>

          <div className='cart-items'>
            {cart &&
              cart.cartItems.map((cartItem) => (
                <div className='cart-item' key={cartItem.id}>
                  <div className='cart-product'>
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='cart-product-price'>${cartItem.price}</div>
                  <div className='cart-product-quantity'>
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className='count'>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className='cart-product-total-price'>
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className='cart-summary'>
            <button className='clear-btn' onClick={handleClearCart}>
              Clear cart
            </button>
            <div className='cart-checkout'>
            <div className='cart-checkout' style={{ textAlign: 'center' }}>
  <div className='subtotal'>
    <span>Subtotal</span>
    <span className='amount'>${total}</span>
  </div>
  <p>Taxes and shipping calculated at checkout</p>
  <div className='continue-shopping'>
    <Link to='/list'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='currentColor'
        className='bi bi-arrow-left'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
        />
      </svg>
      <span>Continue Shopping</span>
    </Link>
    <button onClick={handlePlaceOrder}>Place Order</button>

  </div>
</div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
