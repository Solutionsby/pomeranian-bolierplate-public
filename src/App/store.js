import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Exercises/ReactExercises/Redux/counterSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
