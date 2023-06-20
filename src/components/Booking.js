/* eslint-disable max-len */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { setAccessToken } from '../reducers/user';
import { CalendarContainer, StyledButton, StyledParagraphBooking } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import { StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { API_URL } from '../utils/urls';

// Create context for picked date
const PickedDateContext = createContext();

const Booking = () => {
  const { sticky, stickyRef } = useSticky();
  // const userAccessToken = useSelector((store) => store.user.accessToken || localStorage.getItem('accessToken'));
  const [pickedDate, setPickedDate] = useState(new Date());

  // Access the access token from Redux store
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  // Check for the access token in local storage and update Redux store when the component mounts
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      dispatch(setAccessToken(storedAccessToken));
    }
  }, [dispatch]);

  const handleDateChange = (date) => {
    setPickedDate(date);
  };

  const handleConfirmDate = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Include the access token in the request headers
      },
      body: JSON.stringify({ treatmentId: 'your_treatment_id', pickedDate }) // Include the pickedDate in the request body
    };

    const url = API_URL('booktreatment');

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Treatment booked successfully
          console.log('Treatment booked successfully');
        } else {
          // Failed to book treatment
          console.log('Failed to book treatment');
        }
      });
  };

  return (
    <CalendarContainer>
      {/* Sticky navigation */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
      </StickyNavTwo>
      {!accessToken && (
        // Display login prompt if not logged in
        <div>
          <StyledParagraphAnimation>
            Please log in to book a treatment.
          </StyledParagraphAnimation>
          <StyledLink to="/login">Log in</StyledLink>
        </div>
      )}
      {accessToken && (
        // Display booking options if logged in
        <div>
          <StyledParagraphBooking>Welcome, pick a treatment date</StyledParagraphBooking>
          {pickedDate && (
            // Display selected date if available
            <p> Selected Date: {pickedDate.toLocaleDateString('en-GB')}
            </p>
          )}
          <StyledButton type="submit" onClick={handleConfirmDate}>
            Confirm Date
          </StyledButton>
        </div>
      )}
      {/* Provide picked date through context */}
      <PickedDateContext.Provider value={pickedDate}>
        {/* Calendar component for date selection */}
        <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" minDate={new Date()} />
      </PickedDateContext.Provider>
    </CalendarContainer>
  );
};

// Custom hook for accessing picked date
const usePickedDate = () => useContext(PickedDateContext);

export default Booking;
export { usePickedDate };
