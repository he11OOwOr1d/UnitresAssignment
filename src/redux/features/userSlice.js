import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Guest',
  },
  reducers: {
    logout: (state) => {
      state.username = 'Guest';
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer; 