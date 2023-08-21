import axios from 'axios';

const API_KEY = 'e3803bbfdemsh3386c704bc6e390p1d5e16jsn9bea6134919a';

const api = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

export const fetchExerciseCategories = async () => {
  try {
    const response = await api.get('/exercises/bodyPartList');
    return response.data;
  } catch (error) {
    console.error('Error fetching exercise categories:', error);
    return [];
  }
};

export const fetchExercisesByCategory = async (category: string) => {
  try {
    const response = await api.get(`/exercises/bodyPart/${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching exercises for category:', error);
    return [];

  }
};

export default api;
