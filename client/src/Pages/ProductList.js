// ProductList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../JS/Actions/product';
import ProductCard from '../Components/ProductCard';

const ProductList = () => {
  const carslist = useSelector((state) => state.carReducer.carslist);
  const loading = useSelector((state) => state.carReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div >
      <h2>Explore Our Cars</h2>

      <div style={{display :'flex',justifyContent:'center'}}>
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          carslist.map((car) => (
            <ProductCard car={car} key={car._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
