// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  userName: 'tempuser',
  email: 'tesmp@gmail.com',
  password: '',
  username: '',
  dob: '',
  gender: '',
};

// Create a slice
const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { userName, email, password, username, dob, gender } = action.payload;
      state.userName = userName || state.userName;
      state.email = email || state.email;
      state.password = password || state.password;
      state.username = username || state.username;
      state.dob = dob || state.dob;
      state.gender = gender || state.gender;
    },
  },
});

// Export the actions
export const { setUserData } = userDataSlice.actions;

// Export the reducer
export default userDataSlice.reducer;
