import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from 'reducers/users';
import WelcomePage from './WelcomePage';

export const Main = () => {
  const reducer = combineReducers({
    users: users.reducer
  })

  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <WelcomePage />
    </Provider>
  )
}