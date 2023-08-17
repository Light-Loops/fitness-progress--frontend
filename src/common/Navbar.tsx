import { AppBar,  Box, Button, Container, Grid,  Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { startLogout } from '../redux/auth/thunks';

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar
          sx={{backgroundColor: '#061A26'}}
        >
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h6" color="secondary" sx={{ textAlign: 'center', marginRight: '10px'  }}>
                  Fitness Progress
                </Typography>
                <img src="./fitness-progress.svg" alt='fitness-progress' width='30px' height='30px' />
              </Grid>
              <Grid item>
              <Button
                color='warning'
                onClick={handleLogout}
                variant='outlined'
              >
                <Typography variant="h6" sx={{ textAlign: 'center', fontSize:'12px' }}>
                  Salir
                </Typography>
              </Button>
              <Grid item></Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
