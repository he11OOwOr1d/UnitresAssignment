import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
  },
});

export default store;
