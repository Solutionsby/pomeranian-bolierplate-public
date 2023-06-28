import { createSlice } from '@reduxjs/toolkit';

function saveInStorage(counterValue) {
  window.localStorage.setItem('redux-counterValue', counterValue);
}
function getFromLocalStorage() {
  return Number(window.localStorage.getItem('redux-counterValue')) || 0;
}

const initialState = {
  value: getFromLocalStorage(),
  number: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveInStorage(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      saveInStorage(state.value);
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    seterNumber: (state, action) => {
      state.number = action.payload;
      saveInStorage(state.value);
    },
  },
});

export const { increment, decrement, incrementByAmount, reset, seterNumber } =
  counterSlice.actions;

export default counterSlice.reducer;
