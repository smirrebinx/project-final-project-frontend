import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'components/Main'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from 'reducers/user';
import WelcomePage from 'components/WelcomePage';

const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}