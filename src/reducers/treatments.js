import { createSlice } from '@reduxjs/toolkit';

const treatments = createSlice({
  name: 'treatments',
  initialState: {
    items: [],
    treatmentType: null,
    error: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload
    },
    setTreatmentType: (store, action) => {
      store.treatmentType = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
});

export const { setItems, setTreatmentType, setError } = treatments.actions;
export default treatments;