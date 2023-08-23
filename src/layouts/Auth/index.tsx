import React, { ReactNode } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

type Auth = {
  title: string,
  children: ReactNode;
}

export const AuthLayout: React.FC<Auth> = ({title, children}) => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item sx={{position: 'relative'}}>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em',backgroundColor:'#333F4E',mt:'48px', mb:"8px"} }>
          <img src="./fitness-progress.svg" alt='fitness-progress' width='80px' height='80px' style={{position:"absolute", right:"-10px", top:"8px"}}/>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h5">
              {title}
            </Typography>
              {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

