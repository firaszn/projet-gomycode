import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/Actions/user';



function ResponsiveAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cartReducer);

 
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#130f40',
              textDecoration: 'none',
              fontSize: '2.5rem',
            }}
          >
            <span style={{ color: '#f9f906' }}>Far </span>out
          </Typography>


          {isAuth ? (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    <Button onClick={() => navigate('/')} sx={{ color: 'white', mr: 2 }}>
      Home
    </Button>
    <Button onClick={() => navigate('/list')} sx={{ color: 'white', mr: 2 }}>
      Products
    </Button>
   

  </Box>
) : (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    <Button onClick={() => navigate('/login')} sx={{ color: 'white', mr: 2 }}>
      Login
    </Button>
  </Box>
)}


          
          {isAuth && (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='/cart' className='Navbar-navigation'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='currentColor'
              className='bi bi-bag'
              viewBox='0 0 16 16'
            >
              <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
            </svg>
            <div className='Navbar-navigation-item'>
              <span className='Navbar-navigation-item-link'>
                {cartTotalQuantity}
              </span>
            </div>
          </div>
        </Link>
              <Button onClick={() => { 
  dispatch(logout()); 
  navigate('/login'); // Navigate to /login after logout
}} style={{ color: 'white' }}>
  Logout
</Button>
            </Box>
          )}

       

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
