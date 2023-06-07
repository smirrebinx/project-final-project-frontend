/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user, { loginSuccess } from 'reducers/user';
import { API_URL } from '../utils/urls';
import { SecondHeaderLogIn, FormWrapper, InnerWrapper, OuterWrapper, Wrapper, LineBeforeAndAfter } from './LoginStyling';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState(0);
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAccessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (userAccessToken) {
      navigate('/');
    }
  }, [userAccessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, mobilePhone, password })
    };

    const url = mode === 'register' ? API_URL('register') : API_URL('login');

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          const { id, accessToken } = data.response;
          dispatch(loginSuccess({ firstName, lastName, id, accessToken }));
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
          <LineBeforeAndAfter>OR</LineBeforeAndAfter>
          <SecondHeaderLogIn>Fill in your information</SecondHeaderLogIn>
          <form onSubmit={onFormSubmit}>
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
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email"
              required />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              aria-labelledby="password"
              required />
            <button type="submit">Complete Booking</button>
          </form>
        </FormWrapper>
        <Wrapper>
          <label htmlFor="register">Register</label>
          <input
            type="radio"
            id="register"
            checked={mode === 'register'}
            onChange={() => setMode('register')}
            aria-labelledby="register" />
          <label htmlFor="login">Login</label>
          <input
            type="radio"
            id="login"
            checked={mode === 'login'}
            onChange={() => setMode('login')}
            aria-labelledby="login" />
        </Wrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const userReducer = Login.reducer;
export default Login;

