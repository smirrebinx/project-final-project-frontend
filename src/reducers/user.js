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
    }
  }
});

export const { setUserId, setAccessToken, setError, loginSuccess } = user.actions;
export default user;