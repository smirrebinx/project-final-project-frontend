import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import user from 'reducers/user';
import { useDispatch } from 'react-redux';
import WelcomePage from './WelcomePage';
import Login from './Login';
import Booking from './Booking';
import Cards from './Cards';
import UserInfo from './UserInfo';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setAccessToken(null));
    localStorage.removeItem('user');
    navigate('/login');
    console.log('logged out');
  };

  return (
    <section>
      <div className="form-container">
        <div className="button-container">
          <button className="logout-button" type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Booking />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </section>
  );
};

export default Main;
