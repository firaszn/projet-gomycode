// ProductCard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../JS/Actions/cartActions';
import './ProductCard.css';

const ProductCard = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5947/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className='home-container'>
      <h2>New Arrivals</h2>
      <div className='products'>
        {data.map((product) => (
          <div key={product.id} className='product' style={{ fontSize: '18px' }}>
            {/* Increase font size */}
            <h3>{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '300px', height: '300px' }}
            />
            {/* Increase image size */}
            <div className='details'>
              <span style={{ fontSize: '16px' }}>{product.desc}</span>
              {/* Increase font size */}
              <span className='price' style={{ fontSize: '20px' }}>
                ${product.price}
              </span>
              {/* Increase font size */}
            </div>
            <button onClick={() => handleAddToCart(product)}>Add To cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
