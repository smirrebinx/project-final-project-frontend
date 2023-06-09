/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const calendarBooking = createSlice({
  name: 'calendarBooking',
  initialState: {
    userId: null,
    accessToken: null,
    error: null,
    pickedDate: new Date() // Add the pickedDate property with an initial value
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      const { id, accessToken } = action.payload;
      state.userId = id;
      state.accessToken = accessToken;
      state.error = null;
    },
    setPickedDate: (state, action) => {
      state.pickedDate = action.payload;
    }
  }
});

export const { setUserId, setAccessToken, setError, loginSuccess, setPickedDate } = calendarBooking.actions;
export default calendarBooking.reducer;
