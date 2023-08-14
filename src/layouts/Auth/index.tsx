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
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em',backgroundColor:'#061A26' }}>
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

