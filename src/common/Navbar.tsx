import {  BottomNavigation,  BottomNavigationAction,  Box, Button } from '@mui/material';
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useAppDispatch } from '../redux/hooks';
import { startLogout } from '../redux/auth/thunks';
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import { ExitToApp } from '@mui/icons-material';

export const Navbar: React.FC<{}> = () => {
  
  const dispatch = useAppDispatch();
  
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false); 

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setOpen(false);
  };

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
          onClick={handleOpenDialog} 
        />
      </BottomNavigation>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar Cierre de Sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas cerrar la sesión Guerrero?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleLogout} color="primary">
            Cerrar Sesión
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
