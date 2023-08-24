import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

type Exercise = {
    id: string;
    name: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    target: string;
};

interface ExerciseListProps {
    exercises: Exercise[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
    
    return (
    <Box display="flex" flexWrap="wrap" gap={2} mt={5}  sx={{
                
    }}>
        {exercises.map((exercise) => (
        <Card key={exercise.id} sx={{ width: 300, flex: '1 0 300px', }}>
            <CardMedia
            component="img"
            height="250"
            image={exercise.gifUrl}
            alt={exercise.name}
            style={{ filter: 'saturate(0.8)', opacity: 0.8, }}
            />
        <CardContent>
            <Typography  sx={{ textTransform:'capitalize', fontSize:'1.2rem', marginBottom:'0.8rem'}}>{exercise.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{textTransform:'capitalize',color:'#99a8b4'}}>
                Body Part: {exercise.bodyPart}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textTransform:'capitalize', color:'#99a8b4'}}>
                Equipment: {exercise.equipment}
            </Typography>
            <Button 
            variant="contained"  
            size='small'
            fullWidth
            sx={{marginTop:'1rem', color:'#f9f9f8'}}>
                Agregar a rutina
            </Button>
        </CardContent>
        </Card>
        ))}
    </Box>
    );
};

export default ExerciseList;
