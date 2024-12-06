import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// Create a userSlice for auth-related actions
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

const Header = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1>Dynamic Website</h1>
      <div className="user-info">
        <span>{username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
