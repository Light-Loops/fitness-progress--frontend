import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import ExerciseList from "../ExercisesCategories";
import IMG1 from '../../asessts/IMG1.png';
import { useNavigate } from "react-router-dom";

export const ProposalPage: React.FC = () => {
    const exerciseListRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const scrollTo = () => {
    if (exerciseListRef.current) {
        exerciseListRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };
    
    return (
    <Container 
    sx={{ 
      mt: 4,
      display: 'flex', 
      flexDirection: 'column', 
     }} maxWidth="md">
        <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                sx={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center' ,
                    marginBottom:'2rem' 
                }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h5" color="secondary" sx={{ 
                    textAlign: 'center', 
                    marginRight: '10px', 
                    fontWeight: 'bold',
                    }}>
                  Fitness Progress
                </Typography>
                <img src="./fitness-progress.svg" 
                alt='fitness-progress' 
                width='60px' 
                height='60px' />
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Container>
        <Box
        sx={{ 
            maxWidth: '447px',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignSelf: 'center',
            py: 8, 
            px: 5,
            backgroundImage: `url(${IMG1})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            maxHeight: '500px',
            boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
               }}
        borderRadius={6}
        >
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            position="relative"
        >
            <Typography
            variant="h3"
            sx={{ 
                textAlign: 'center',
                color: '#ffffff', 
                textShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)',
                fontFamily: 'Black Ops One',
                fontSize: {xs: '1.6rem', sm:'3rem'},
                opacity: 0.6
            }}
            >
            Entrenamiento personalizado
            </Typography>
            <Typography
            variant="h6"
            sx={{ 
                textAlign: 'left', 
                color: '#ffffff', 
                mt:-1,
                mb: 2, 
                fontSize: '1rem',
                fontWeight: 'bold'
            }}
            maxWidth={"sm"}
            >
            ¡Alcanza tu mejor versión!
            </Typography>
            <Button 
            onClick={scrollTo} 
            variant="contained" 
            color="primary" 
            sx={{ 
                width: 'contained', 
                transform: 'skew(-20deg)',
                fontWeight: '700'
            }}>
            ¡Comienza Ahora!
            </Button>
        </Grid>
        </Box>
        <div ref={exerciseListRef}>
        <ExerciseList  />
        </div>
    </Container>
    
    )}