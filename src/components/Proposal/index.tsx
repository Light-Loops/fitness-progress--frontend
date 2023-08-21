import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import ExerciseList from "../ExercisesCategories";

export const ProposalPage: React.FC = () => {
    const exerciseListRef = useRef<HTMLDivElement>(null);

    const scrollTo = () => {
    if (exerciseListRef.current) {
        exerciseListRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };
    
    return (
    <Container sx={{ mt: 8 }} maxWidth="xl">
        <Box
        sx={{ 
            width: '100%',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            py: 8, 
            px: 5,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));',
        }}
        borderRadius={6}
        >
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ height: '100%'}}
        >
            <Typography
            variant="h6"
            sx={{ 
                textAlign: 'center', 
                color: '#ffffff' 
            }}
            maxWidth={"md"}
            >
            Entrenamiento personalizado y progreso en un solo lugar
            </Typography>
            <Typography
            variant="h6"
            sx={{ 
                textAlign: 'center', 
                color: '#ffffff', 
                mt: 2, 
                mb: 3, 
                fontSize: '1rem' 
            }}
            maxWidth={"sm"}
            >
            Alcanza tu mejor versión
            </Typography>
            <Button 
            onClick={scrollTo} 
            variant="contained" 
            color="primary" 
            sx={{ width: '180px', height: '40px' 
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