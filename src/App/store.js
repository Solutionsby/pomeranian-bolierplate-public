import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Exercises/ReactExercises/Counter/counterSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
