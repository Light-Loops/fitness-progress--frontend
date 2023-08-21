import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
        backgroundColor:'#061A26',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));'        
    }}>
        {exercises.map((exercise) => (
        <Card key={exercise.id} sx={{ width: 300, flex: '1 0 300px' }}>
            <CardMedia
            component="img"
            height="140"
            image={exercise.gifUrl}
            alt={exercise.name}
            style={{ filter: 'saturate(0.8)' }}
            />
        <CardContent>
            <Typography sx={{ textTransform:'uppercase', fontSize:'1rem'}}>{exercise.name}</Typography>
            <Typography variant="body2" color="text.secondary">
                Body Part: {exercise.bodyPart}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Equipment: {exercise.equipment}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Target: {exercise.target}
            </Typography>
        </CardContent>
        </Card>
        ))}
    </Box>
    );
};

export default ExerciseList;
