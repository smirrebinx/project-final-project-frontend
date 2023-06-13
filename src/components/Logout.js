import React from 'react';
import { useDispatch } from 'react-redux';
import user from 'reducers/user';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
  };

  return (
    <button type="button" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
