/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user, { loginSuccess } from 'reducers/user';
import { API_URL } from '../utils/urls';
import { SecondHeaderLogIn, FormWrapper, InnerWrapper, OuterWrapper, LineBeforeAndAfter } from './LoginStyling';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAccessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (userAccessToken) {
      navigate('/');
    }
  }, [userAccessToken, navigate]);

  const onLoginFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };

    const url = API_URL('login');

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          const { id, accessToken } = data.response;
          dispatch(loginSuccess({ email, id, accessToken }));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };

  const onRegisterFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, mobilePhone, password })
    };

    const url = API_URL('register');

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          const { id, accessToken } = data.response;
          dispatch(loginSuccess({ email, id, accessToken }));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <FormWrapper>
          <SecondHeaderLogIn>Log in</SecondHeaderLogIn>
          <form onSubmit={onLoginFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email-log-in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email-log-in"
              required />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password-log-in"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              aria-labelledby="password-log-in"
              required />

            <button type="submit">Log in</button>
          </form>

          <LineBeforeAndAfter>OR</LineBeforeAndAfter>

          <SecondHeaderLogIn>Fill in your information</SecondHeaderLogIn>
          <form onSubmit={onRegisterFormSubmit}>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-labelledby="firstName"
              required />

            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-labelledby="lastName"
              required />

            <label htmlFor="mobilePhone">Mobile Phone*</label>
            <input
              type="text"
              id="mobilePhone"
              value={mobilePhone}
              onChange={(e) => setMobilePhone(e.target.value)}
              aria-labelledby="mobilePhone"
              required />

            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email-register"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email-register"
              required />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password-register"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              aria-labelledby="password-register"
              required />
            <button type="submit">Complete Registration</button>
          </form>
        </FormWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const userReducer = Login.reducer;
export default Login;