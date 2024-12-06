import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
  },
  reducers: {
    setMenuData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuData } = menuSlice.actions;
export default menuSlice.reducer; 