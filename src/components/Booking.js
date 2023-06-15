import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken } from 'reducers/user';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { CalendarContainer, StyledButton, StyledParagraphBooking } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import { StyledLink, StyledParagraphAnimation } from './GlobalStyling';

// Create contexts for picked date and selected treatment ID
const PickedDateContext = createContext();
const SelectedTreatmentIdContext = createContext();

const Booking = ({ location }) => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(new Date());

  // Access the access token from Redux store
  const accessToken = useSelector((store) => store.user.accessToken);

  const selectedTreatmentId = location?.state?.treatmentId;
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
    // Redirect to UserInfo page
    window.location.href = '/userinfo';
  };

  return (
    <CalendarContainer>
      {/* Sticky navigation */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
      </StickyNavTwo>
      {!accessToken && (
        // Display login prompt if not logged in
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
          <StyledParagraphAnimation> Please log in to book a treatment.</StyledParagraphAnimation>
          <StyledLink to="/login">Log in</StyledLink>
        </div>
      )}
      {accessToken && (
        // Display booking options if logged in
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <StyledParagraphBooking>Welcome, pick a treatment date</StyledParagraphBooking>
          {pickedDate && (
            // Display selected date if available
            <p>Selected Date: {pickedDate.toLocaleDateString('en-GB')}</p>
          )}
          <StyledButton type="submit" onClick={handleConfirmDate}>Confirm Date</StyledButton>
        </div>
      )}
      {/* Provide picked date and selected treatment ID through contexts */}
      <PickedDateContext.Provider value={pickedDate}>
        <SelectedTreatmentIdContext.Provider value={selectedTreatmentId}>
          {/* Calendar component for date selection */}
          <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" minDate={new Date()} />
        </SelectedTreatmentIdContext.Provider>
      </PickedDateContext.Provider>
    </CalendarContainer>
  );
};

// Custom hooks for accessing picked date and selected treatment ID
const usePickedDate = () => useContext(PickedDateContext);
const useSelectedTreatmentId = () => useContext(SelectedTreatmentIdContext);

export default Booking;
export { usePickedDate, useSelectedTreatmentId };
