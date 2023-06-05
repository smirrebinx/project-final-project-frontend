import React, { useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import user from 'reducers/user';
import { API_URL } from '../utils/urls';
import Login from './Login';
import WelcomePage from './WelcomePage';
import UserInfo from './UserInfo';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else {
      // GET
      const options = {
        headers: {
          Authorization: accessToken
        }
      };

      fetch(`${API_URL}/user-info`, options)
        .then((res) => res.json())
        .then((data) => {
          if (data.userinfo) {
            // Handle successful user info retrieval
            console.log('User info:', data.userinfo);
            // You can update the state or perform any other necessary actions here
          } else {
            // Handle case when user info is not available
            console.log('Failed to fetch user info');
            // You can update the state or perform any other necessary actions here
          }
        })
        .catch((error) => {
          // Handle fetch error
          console.log('User info fetch error:', error);
          // You can update the state or perform any other necessary actions here
        });
    }
  }, [accessToken, navigate]);

  const logOutButton = () => {
    // Clear user data from the Redux store and local storage
    batch(() => {
      dispatch(user.actions.setUserId(null));
      dispatch(user.actions.setAccessToken(null));
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setError(null));
    });
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
      <WelcomePage />
      <Link to="/userinfo">
        <button type="button">Go to UserInfo</button>
      </Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </section>
  );
};

export default Main;
