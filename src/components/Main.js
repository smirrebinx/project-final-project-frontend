/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';
import user from 'reducers/user';
import WelcomePage from './WelcomePage';
import Login from './Login';
import Booking from './Booking';
import Cards from './Cards';
import UserInfo from './UserInfo';
import Logout from './Logout';
import LogOutIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';
import NotFound from './NotFound';
import Footer from './Footer';
import { PageContainer } from './GlobalStyling';

const Main = () => {
  const dispatch = useDispatch();
  const logoutRef = useRef(null);
  const [showLogout, setShowLogout] = useState(false);

  const [pickedDate, setPickedDate] = useState([]);

  // Access the picked date from the Redux store
  const bookedTreatmentDate = useSelector((state) => state.treatments.bookedTreatmentDate);

  const handleDateChange = (date) => {
    setPickedDate(date);
  };

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
    <PageContainer>
      {/* Display user icon with click event to scroll to logout */}
      <button
        type="button"
        onClick={handleScrollToLogout}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <img src={LogOutIcon} alt="SVG Icon user avatar" title="Log Out" />
      </button>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booktreatment" element={<Booking onDateChange={handleDateChange} />} />
        <Route path="/treatment" element={<Cards />} />
        <Route path="/userinfo" element={<UserInfo pickedDate={bookedTreatmentDate || pickedDate} />} />
        {/* Catch-all route for NotFound */}
        <Route path="*" element={<NotFound loader />} />
      </Routes>
      {/* Display logout component if showLogout state is true */}
      {showLogout && <Logout handleCloseLogout={handleCloseLogout} handleLogout={handleLogout} />}
      {/* Hidden div to mark the position of logout component */}
      <div ref={logoutRef} style={{ display: 'none' }}>
        Log out
      </div>
      <Footer />
    </PageContainer>
  );
};

export default Main;
