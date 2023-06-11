import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setEmail: (store, action) => {
      store.email = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    loginSuccess: (store, action) => {
      const { id, accessToken } = action.payload;
      store.userId = id;
      store.accessToken = accessToken;
      store.error = null;
    },
    logout: (store) => {
      store.userId = null;
      store.email = null;
      store.accessToken = null;
      localStorage.removeItem('user');
    }
  }
});

export const { setUserId, setAccessToken, setError, loginSuccess, logout } = user.actions;
export default user;