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
      showLabels
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
        fontSize: '2rem',
      }}
    >
      <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
      <BottomNavigationAction label="Rutina" icon={<ListIcon />} />
      <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
      <BottomNavigationAction 
      label="Salir"
      icon={<ExitToApp />} 
      onClick={handleLogout} 
      />
    </BottomNavigation>
    </Box>
  );
};
