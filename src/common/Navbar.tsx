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
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  Fitness Progress
                </Typography>
              </Grid>
              <Grid item>
              <Button
                color='warning'
                onClick={handleLogout}
              >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
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
