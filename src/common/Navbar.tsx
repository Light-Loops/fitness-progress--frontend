import { AppBar,  BottomNavigation,  BottomNavigationAction,  Box, Button, Container, Grid,  Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { startLogout } from '../redux/auth/thunks';
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import { ExitToApp } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }
  const [value, setValue] = React.useState(0);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: '#333F4E',
        zIndex: 1000
      }}
    >
      <BottomNavigationAction  icon={<HomeIcon />} />
      <BottomNavigationAction  icon={<ListIcon />} />
      <BottomNavigationAction  icon={<PersonIcon />} />
      <BottomNavigationAction  
      icon={<ExitToApp />} 
      onClick={handleLogout}
      sx={{color: '#f2a42b'}}  
      />
    </BottomNavigation>
    </Box>
  );
};
