/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user, { loginSuccess } from 'reducers/user';
import { API_URL } from '../utils/urls';
import { SecondHeaderLogIn, FormWrapper, InnerWrapper, OuterWrapper, LineBeforeAndAfter } from './LoginStyling';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import Footer from './Footer';

const Login = () => {
  const { stickyRef } = useSticky();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAccessToken = useSelector((store) => store.user.accessToken);
  const [isLoginForm, setIsLoginForm] = useState(null); // Initialize as null

  useEffect(() => {
    if (userAccessToken) {
      navigate('/');
    }
  }, [userAccessToken, navigate]);

  const onLoginFormSubmit = (event) => {
    event.preventDefault();

    setIsLoginForm(true); // Update isLoginForm when login form is submitted

    // Check if it's the login form
    if (isLoginForm) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      };

      const url = API_URL('login');

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            const { id, accessToken } = data.response;
            dispatch(loginSuccess({ email: loginEmail, id, accessToken }));
          } else {
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setError(data.response));
          }
        });
    }
  };

  const onRegisterFormSubmit = (event) => {
    event.preventDefault();

    setIsLoginForm(false); // Update isLoginForm when registration form is submitted

    // Check if it's the registration form
    if (!isLoginForm) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email: registerEmail, mobilePhone, password: registerPassword })
      };

      const url = API_URL('register');

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            const { id, accessToken } = data.response;
            dispatch(loginSuccess({ email: registerEmail, id, accessToken }));
          } else {
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setError(data.response));
          }
        });
    }
  };

  return (
    <>
      <StickyNavTwo ref={stickyRef}>
        <StyledNavHeaderTwo>Log In or Register</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapper>
          <FormWrapper>
            <SecondHeaderLogIn>Log in</SecondHeaderLogIn>
            <form onSubmit={onLoginFormSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email-log-in"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                aria-labelledby="email-log-in"
                required />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password-log-in"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
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

              <label htmlFor="registerEmail">Email*</label>
              <input
                type="text"
                id="email-register"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                aria-labelledby="email-register"
                required />

              <label htmlFor="registerPassword">Password*</label>
              <input
                type="password"
                id="password-register"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                autoComplete="off"
                aria-labelledby="password-register"
                required />
              <button type="submit">Complete Registration</button>
            </form>
          </FormWrapper>
        </InnerWrapper>
      </OuterWrapper>
      <Footer />
    </>
  );
};

export default Login;
