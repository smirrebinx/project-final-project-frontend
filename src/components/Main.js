import React from 'react';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Login from './Login';

const Main = () => {
  const navigate = useNavigate();

  const logOutButton = () => {
    // Clear user data from the Redux store and local storage
    localStorage.removeItem('persist:root');
    navigate('/login');
  };

  return (
    <section>
      <div className="form-container">
        <div className="button-container">
          <button className="logout-button" type="button" onClick={logOutButton}>
            Log out
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Link to="/login">
        <button type="button">Go to Login</button>
      </Link>
    </section>
  );
};

export default Main;
