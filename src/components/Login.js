/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { user, logout } from 'reducers/user';
import { API_URL } from '../utils/urls';
import { SecondHeaderLogIn, FormWrapper, LineBeforeAndAfter } from './LoginStyling';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { InnerWrapper, OuterWrapper, StyledLink } from './GlobalStyling';

const Login = () => {
  const { sticky, stickyRef } = useSticky();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const dispatch = useDispatch();
  // Check if the access token exists in the Redux store. If it doesn't, it retrieves the access token from local storage.
  // If the user has previously logged in and their access token is stored in local storage, they will be able to access
  // authenticated routes without the need for a new login within the same session.
  const userAccessToken = useSelector((store) => store.user.accessToken || localStorage.getItem('accessToken'));
  // const [isLoginForm, setIsLoginForm] = useState(null); // Initialize as null

  useEffect(() => {
    const handleBeforeUnload = () => {
      dispatch(logout());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [dispatch]);

  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    // setIsLoginForm(true); // Update isLoginForm when login form is submitted

    // Check if it's the login form
    if (event.target.id === 'login-form') {
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
          console.log('Login response:', data);
          if (data.success) {
            console.log('Login successful!');
            batch(() => {
              // const { accessToken } = data.response;
              // dispatch(user.actions.loginSuccess({ accessToken }));
              localStorage.setItem('accessToken', data.response.accessToken);
              dispatch(user.actions.setFirstName(data.response.firstName));
              dispatch(user.actions.setLastName(data.response.lastName));
              dispatch(user.actions.setMobilePhone(data.response.mobilePhone));
              dispatch(user.actions.setEmail(data.response.email));
              dispatch(user.actions.setAccessToken(data.response.accessToken));
              dispatch(user.actions.setUserId(data.response.userId));
            })
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your are successfully logged in.',
              confirmButtonColor: 'var(--submit-button-color-two)'
            });
            console.log(data.response);
          } else {
            console.log('Login failed:', data.response);
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setError(data.response));
            Swal.fire({
              icon: 'error',
              title: 'Sorry',
              text: 'We\'re sorry, something went wrong with the log in. Please, try again.',
              confirmButtonColor: 'var(--submit-button-color-two)'
            });
          }
        });
    }
  };

  const onRegisterFormSubmit = (event) => {
    event.preventDefault();
    // setIsLoginForm(false); // Update isLoginForm when registration form is submitted

    // Check if it's the registration form
    if (event.target.id === 'register-form') {
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
          console.log('Registration response:', data);
          if (data.success) {
            console.log('Registration successful!');
            batch(() => {
              // const { accessToken } = data.response;
              // dispatch(user.actions.loginSuccess({ accessToken }));
              dispatch(user.actions.setFirstName(data.response.firstName));
              dispatch(user.actions.setLastName(data.response.lastName));
              dispatch(user.actions.setMobilePhone(data.response.mobilePhone));
              dispatch(user.actions.setEmail(data.response.email));
              dispatch(user.actions.setAccessToken(data.response.accessToken));
              dispatch(user.actions.setUserId(data.response.userId));
            })
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your are successfully registered, please log in.',
              confirmButtonColor: 'var(--submit-button-color-two)'
            });
          } else {
            console.log('Registration failed:', data.response);
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setError(data.response));
            Swal.fire({
              icon: 'error',
              title: 'Sorry',
              text: 'We\'re sorry, something went wrong with the registration. Please, try again.',
              confirmButtonColor: 'var(--submit-button-color-two)'
            });
          }
        });
    }
  };

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>Log In or Register</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapper>
          {userAccessToken ? (
            <>
              <p>You are logged in! Choose an option:</p>
              <StyledLink to="/booking">Go to Booking to pick a date</StyledLink>
              <StyledLink to="/userinfo">Go to User Information to see your booked treatment</StyledLink>
            </>
          ) : (
            <FormWrapper>
              <SecondHeaderLogIn>Log in</SecondHeaderLogIn>
              <form id="login-form" onSubmit={onLoginFormSubmit}>
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
              <form id="register-form" onSubmit={onRegisterFormSubmit}>
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
          )}
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default Login;