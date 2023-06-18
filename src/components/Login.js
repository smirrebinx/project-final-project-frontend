/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { user, setFirstName, setLastName, setMobilePhone, setEmail, setAccessToken, setUserId } from 'reducers/user';
import { API_URL } from '../utils/urls';
import { SecondHeaderLogIn, FormWrapper, LineBeforeAndAfter } from './LoginStyling';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraph } from './GlobalStyling';

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

  const userAccessToken = useSelector((store) => store.user.accessToken || localStorage.getItem('accessToken'));

  const onLoginFormSubmit = async (event) => {
    event.preventDefault();

    if (event.target.id === 'login-form') {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      };

      const url = API_URL('login');

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.success) {
          batch(() => {
            localStorage.setItem('accessToken', data.response.accessToken);
            dispatch(setFirstName(data.response.firstName));
            dispatch(setLastName(data.response.lastName));
            dispatch(setMobilePhone(data.response.mobilePhone));
            dispatch(setEmail(data.response.email));
            dispatch(setAccessToken(data.response.accessToken));
            dispatch(setUserId(data.response.userId));
          });

          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'You are successfully logged in.',
            confirmButtonColor: 'var(--submit-button-color-two)'
          });
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));

          Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'We\'re sorry, something went wrong with the log in. Please try again.',
            confirmButtonColor: 'var(--submit-button-color-two)'
          });
        }
      } catch (error) {
        // Handle fetch error
        console.error('An error occurred during login:', error);
      }
    }
  };

  const onRegisterFormSubmit = async (event) => {
    event.preventDefault();

    if (event.target.id === 'register-form') {
      // Sanitize the mobilePhone value
      const sanitizedMobilePhone = mobilePhone ? mobilePhone.replace(/\D/g, '') : '';

      // Validate the sanitized mobilePhone value
      if (sanitizedMobilePhone && Number.isNaN(sanitizedMobilePhone)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid mobile phone',
          text: 'Mobile phone must be a number',
          confirmButtonColor: 'var(--submit-button-color-two)'
        });
        return;
      }

      // Convert the sanitized mobilePhone to a number
      const mobilePhoneNumber = sanitizedMobilePhone ? parseInt(sanitizedMobilePhone, 10) : null;

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email: registerEmail, mobilePhone: mobilePhoneNumber, password: registerPassword })
      };

      const url = API_URL('register');

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.success) {
          batch(() => {
            dispatch(user.actions.setFirstName(data.response.firstName));
            dispatch(user.actions.setLastName(data.response.lastName));
            dispatch(user.actions.setMobilePhone(data.response.mobilePhone));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setUserId(data.response.userId));
          });

          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'You are successfully registered and logged in.',
            confirmButtonColor: 'var(--submit-button-color-two)'
          });
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));

          Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'We\'re sorry, something went wrong with the registration. Please try again.',
            confirmButtonColor: 'var(--submit-button-color-two)'
          });
        }
      } catch (error) {
        // Handle fetch error
        console.error('An error occurred during registration:', error);
      }
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
            // User is logged in
            <>
              <StyledParagraph>You are logged in! Choose an option:</StyledParagraph>
              <StyledLink to="/booking">Go to Booking to pick a date</StyledLink>
              <StyledLink to="/userinfo">Go to User Information to see your booked treatment</StyledLink>
            </>
          ) : (
            // User is not logged in
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
                <button type="submit">Register</button>
              </form>
            </FormWrapper>
          )}
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default Login;
