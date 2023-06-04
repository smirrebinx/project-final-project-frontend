import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { API_URL } from '../utils/utils';
import WelcomePage from './WelcomePage';
import UserInfo from './UserInfo';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

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
            setUserInfo(data.userinfo);
          } else {
            setUserInfo('Failed to fetch user info');
          }
        })
        .catch((error) => {
          console.log('User info fetch error', error);
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

  if (!accessToken) {
    return (
      <section>
        <div className="form-container">
          <h1>Welcome page</h1>
          <div className="button-container">
            <button
              className="logout-button"
              type="button"
              onClick={logOutButton}>
              Log out
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="form-container">
        <UserInfo />
        <div className="button-container">
          <button
            className="logout-button"
            type="button"
            onClick={logOutButton}>
            Log out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
