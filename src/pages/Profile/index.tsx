import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Divider,
} from '@mui/material';



export const Profile: React.FC<{}> = ({

}) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '1rem', textAlign: 'center', borderRadius:'10px' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto 1rem auto',
              }}
            />
            <Typography variant="h6" >Usuario {}</Typography>
            <Button variant="outlined" sx={{
              marginTop: '1rem',
              }}>Editar Perfil</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>

            {/* Agregar gráficos u otros elementos para mostrar el progreso */}
        </Grid>
      </Grid>
    </Container>
  );
};

