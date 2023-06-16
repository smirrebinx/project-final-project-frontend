import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import { Provider, useSelector } from 'react-redux';
import { configureStore, combineReducers, compose } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import user from 'reducers/user';
import treatments from 'reducers/treatments';

// Combine reducers
const rootReducer = combineReducers({
  user: user.reducer,
  treatments: treatments.reducer
});

// Load persisted state from local storage
const persistedStateJSON = localStorage.getItem('userReduxState');
let persistedState = {};
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Compose enhancers for Redux DevTools extension
const composedEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: [thunkMiddleware],
  enhancers: composedEnhancers
});

// Component that wraps the Main component and handles user access token changes
const MainWithUserInfo = () => {
  const userAccessToken = useSelector((state) => state.user.accessToken);

  // Save the userReduxState in local storage whenever the userAccessToken changes
  useEffect(() => {
    localStorage.setItem('userReduxState', JSON.stringify(store.getState()));
  }, [userAccessToken]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Dispatch the logout action when the browser is closed or reloaded
      store.dispatch(user.actions.logout());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
