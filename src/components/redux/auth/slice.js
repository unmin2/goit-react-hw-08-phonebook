import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, signup } from './operations';
import { removeError } from '../../actions'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.pending, (state, _) => {
         state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = action.payload.user;
        state.token = null;
        state.error = action.payload.error;
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(removeError, (state, action) => {
        state.error = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;