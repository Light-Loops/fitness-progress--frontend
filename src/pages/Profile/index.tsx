import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import { useAppSelector } from '../../redux/hooks';



export const Profile: React.FC<{}> = () => {
  const { email, displayName, photoURL}= useAppSelector(state => state.auth);
  
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '1rem', textAlign: 'center', borderRadius:'10px' }}>
            {
              photoURL 
              ? (<Avatar
                alt={displayName!}
                src={photoURL ? photoURL : ''}
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto 1rem auto',
                }}
                />)
              : (<Avatar 
                  sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto 1rem auto',
                  color:"#CDFE2F",
                  bgcolor:  "#333F4E"
                  }}
                  
                ><h1>{displayName![0]}</h1></Avatar>)
            }
            
            <Typography variant="h6" > {email} </Typography>
            <Typography variant="h6" > {displayName}</Typography>
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

