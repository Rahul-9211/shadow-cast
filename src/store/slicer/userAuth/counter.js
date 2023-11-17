// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  count: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
