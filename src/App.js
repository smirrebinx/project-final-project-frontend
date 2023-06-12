import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'components/Main'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from 'reducers/user';
import treatments from 'reducers/treatments';

const reducer = combineReducers({
  user: user.reducer,
  treatments: treatments.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}