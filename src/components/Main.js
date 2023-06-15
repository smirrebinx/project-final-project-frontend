/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { animateScroll } from 'react-scroll';
import user from 'reducers/user';
import WelcomePage from './WelcomePage';
import Login from './Login';
import Booking from './Booking';
import Cards from './Cards';
import UserInfo from './UserInfo';
import Logout from './Logout';
import svgIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';

const Main = () => {
  const dispatch = useDispatch();
  const logoutRef = useRef(null);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    dispatch(user.actions.logout());
  };

  const handleScrollToLogout = () => {
    animateScroll.scrollTo(logoutRef.current.offsetTop);
    setShowLogout(true);
  };

  const handleCloseLogout = () => {
    setShowLogout(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleScrollToLogout}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <img src={svgIcon} alt="SVG Icon" />
      </button>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Booking />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
      {showLogout && (
        <Logout handleCloseLogout={handleCloseLogout} handleLogout={handleLogout} />
      )}
      <div ref={logoutRef} style={{ display: 'none' }}>Log out</div>
    </>
  );
};

export default Main;
