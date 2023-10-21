import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', userData);
      console.log(res.data);
      setToken(res.data.token);

      return res.data;
    } catch (error) {
      const defaultErrorMessage = 'Cannot be created user';
      const errorData = {
        error: error?.response?.data?.message ?? defaultErrorMessage
      }

      return thunkAPI.rejectWithValue(errorData);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', userData);
      setToken(res.data.token);

      return res.data;
    } catch (error) {
      const errorData = {
        user: { name: null, email: null },
        error: 'The user with this email and password combination doesn\'t esixt in the database'
      };

      return thunkAPI.rejectWithValue(errorData);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearToken();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(savedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);