import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../JS/Actions/user';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const handlechange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
  };
  const backgroundStyle = {
    backgroundImage: `url('https://www.shutterstock.com/image-vector/mobile-phone-abstract-vector-closeup-600w-1188009991.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', 
  }
  return (
    <section
      className="vh-100 gradient-custom"
      style={{backgroundStyle
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <Typography variant="h2" className="fw-bold mb-2 text-uppercase">
                    Register
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
                      id="firstName"
                      onChange={handlechange}
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />
                    <TextField
                      id="name"
                      onChange={handlechange}
                      name="name"
                      label="Last Name"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />
                    <TextField
                      id="email"
                      onChange={handlechange}
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />
                    <TextField
                      id="password"
                      onChange={handlechange}
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      className="form-control form-control-lg mb-4"
                    />

                    {loadUser ? (
                      <Button variant="contained" onClick={handleRegister} disabled>
                        <CircularProgress size={24} />
                        Sign up
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={handleRegister}>
                        Sign up
                      </Button>
                    )}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
