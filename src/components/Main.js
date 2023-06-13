import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Login from './Login';
import Booking from './Booking';
import Cards from './Cards';
import UserInfo from './UserInfo';

const Main = () => {
  return (

    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={<Booking />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/userinfo" element={<UserInfo />} />
    </Routes>
  );
};

export default Main;
