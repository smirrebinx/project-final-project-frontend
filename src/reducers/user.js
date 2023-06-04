import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    loginSuccess: (store, action) => {
      const { firstName, lastName, id, accessToken } = action.payload;
      store.username = `${firstName} ${lastName}`;
      store.userId = id;
      store.accessToken = accessToken;
      store.error = null;
    }
  }
});

export const { setUsername, setUserId, setAccessToken, setError, loginSuccess } = user.actions;
export default user;