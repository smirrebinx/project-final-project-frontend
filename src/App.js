import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, combineReducers, compose } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import user, { loginSuccess, logout } from 'reducers/user';
import treatments from 'reducers/treatments';

// Combine reducers
const rootReducer = combineReducers({
  user: user.reducer,
  treatments: treatments.reducer
});

// Compose enhancers for Redux DevTools extension
const composedEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  enhancers: composedEnhancers
});

// Component that wraps the Main component and handles user access token changes
const MainWithUserInfo = () => {
  const userAccessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();

  // Save the user access token in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('accessToken', userAccessToken);
  }, [userAccessToken]);

  // Retrieve access token from local storage when the app loads
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      dispatch(loginSuccess({ accessToken: storedAccessToken }));
    }
  }, [dispatch]);

  // Clear user data when the tab is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      dispatch(logout());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [dispatch]);

  return <Main />;
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainWithUserInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
