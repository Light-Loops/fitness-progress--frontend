import React, { useState, useEffect } from 'react';
import {
  Container,
  SelectChangeEvent,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Pagination,
  Typography,
} from '@mui/material';
import ExerciseList from '../ExercisesList';
import { Exercise } from './interface';
import { fetchExerciseCategories, fetchExercisesByCategory } from '../../api';

type ExerciseCategory = string;

const ExerciseCategoryList: React.FC = () => {
  const [categories, setCategories] = useState<ExerciseCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await fetchExerciseCategories();
      setCategories(categoriesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
    setPage(1); // Resetear la página a 1 al cambiar la categoría

    if (event.target.value) {
      const exercisesData = await fetchExercisesByCategory(event.target.value);
      setExercises(exercisesData);
      setCount(exercisesData.length);
    } else {
      setExercises([]);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const exercisesPerPage = 10; // Cambiar esto según tus necesidades
  const startIndex = (page - 1) * exercisesPerPage;
  const endIndex = startIndex + exercisesPerPage;
  const displayedExercises = exercises.slice(startIndex, endIndex);

  return (
    <Container maxWidth="xl" style={{ marginTop: '2rem', marginBottom:'8rem' }}>
      <Typography
        variant="h5"
        sx={{
          mt: 8,
          mb: 2,
        }}
        maxWidth={'sm'}
      >Categoria de Ejercicios</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl fullWidth>
            <InputLabel>Seleciona la categoria</InputLabel>
            <Select value={selectedCategory} onChange={handleCategoryChange} sx={{textTransform:'capitalize'}}>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category} sx={{textTransform:'capitalize'}}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ExerciseList exercises={displayedExercises} />
          <Pagination
            variant="outlined"
            color="primary"
            count={Math.ceil(count / exercisesPerPage)}
            page={page}
            onChange={handleChange}
            sx={{
              mt: 2,
              mb: 5,
            }}
            size="large"
          />
        </>
      )}
    </Container>
  );
};

export default ExerciseCategoryList;
