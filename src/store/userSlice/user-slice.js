import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
    setupSession: (state, action) => {
      state.isAuth = !!action.payload.token;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
