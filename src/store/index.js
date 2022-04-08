import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../store/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
