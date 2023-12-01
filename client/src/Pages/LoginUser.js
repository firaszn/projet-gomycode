import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/user';

const LoginUser = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, navigate));
  };

  const handleSignUp = () => {
    // Navigate to the register page
    navigate('/register');
  };

  return (
    <section
      className="vh-100 gradient-custom"
      style={{
        background: 'linear-gradient(to right, #FFFF00, #FFD700)',
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <Typography variant="h2" className="fw-bold mb-2 text-uppercase">
                    Login
                  </Typography>
                  <Typography variant="body1" className="text-white-50 mb-5">
                    Please enter your login and password!
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': {
                        m: 1,
                        width: '100%',
                      },
                      '& .form-control': {
                        width: '100%',
                        marginBottom: '1rem',
                      },
                      '& .btn-lg': {
                        width: '100%',
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="typeEmailX"
                      autoComplete="email"
                      onChange={handleChange}
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />
                    <TextField
                      id="typePasswordX"
                      autoComplete="current-password"
                      onChange={handleChange}
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />
                    <Typography variant="body2" className="small mb-5 pb-lg-2">
                      <a href="#!" className="text-white-50">
                        Forgot password?
                      </a>
                    </Typography>
                    <Button variant="outlined" className="btn-lg" onClick={handleLogin}>
                      Login
                    </Button>
                  </Box>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <Typography variant="body1" className="mb-0">
                    Don't have an account?{' '}
                    <Button
                      variant="outlined"
                      className="text-white-50 fw-bold"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginUser;
