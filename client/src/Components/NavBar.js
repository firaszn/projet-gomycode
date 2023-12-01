import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/Actions/user';



function ResponsiveAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const cart = useSelector((state) => state.carReducer.cart);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'green', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
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
            <span style={{ color: '#f9f906' }}>max</span>auto
          </Typography>


          {isAuth ? (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    <Button onClick={() => navigate('/')} sx={{ color: 'white', mr: 2 }}>
      Home
    </Button>
    <Button onClick={() => navigate('/products')} sx={{ color: 'white', mr: 2 }}>
      Cars
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
              <Tooltip title="Shopping Cart" arrow>
                <IconButton size="large" color="inherit" onClick={() => navigate('/cart')} sx={{ ml: 2 }}>
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
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
