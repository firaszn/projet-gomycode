import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import LoginUser from './Pages/LoginUser';
import RegisterUser from './Pages/RegisterUser';
import NavBar from './Components/NavBar';
import Error from './Pages/Error';

import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<RegisterUser />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/list" element={<ProductCard />} />

  <Route path="/login" element={<LoginUser />} />
  <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
