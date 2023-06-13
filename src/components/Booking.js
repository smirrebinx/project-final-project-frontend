import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken } from 'reducers/user';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { CalendarContainer, StyledButton, StyledParagraphBooking } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import Footer from './Footer';
import { StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import LogoutButton from './Logout';

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
    console.log('Picked Date:', date);
  };

  const handleConfirmDate = () => {
    // Perform any necessary actions before redirecting to UserInfo
    // Example: Save the picked date to a database or Redux store

    // Redirect to UserInfo page
    window.location.href = '/userinfo';
  };

  return (
    <>
      <LogoutButton>Log Out</LogoutButton>
      <CalendarContainer>
        <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
          <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
        </StickyNavTwo>
        {!accessToken && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
            <StyledParagraphAnimation> Please log in to book a treatment.</StyledParagraphAnimation>
            <StyledLink to="/login">Log in</StyledLink>
          </div>
        )}
        {accessToken && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <StyledParagraphBooking>Welcome, pick a treatment date</StyledParagraphBooking>
            {pickedDate && (
              <p>Selected Date: {pickedDate.toLocaleDateString('en-GB')}</p>
            )}
            <StyledButton type="submit" onClick={handleConfirmDate}>Confirm Date</StyledButton>
          </div>
        )}
        <PickedDateContext.Provider value={pickedDate}>
          <SelectedTreatmentIdContext.Provider value={selectedTreatmentId}>
            <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" minDate={new Date()} />
          </SelectedTreatmentIdContext.Provider>
        </PickedDateContext.Provider>
      </CalendarContainer>
      <Footer />
    </>
  );
};

const usePickedDate = () => useContext(PickedDateContext);
const useSelectedTreatmentId = () => useContext(SelectedTreatmentIdContext);

export default Booking;
export { usePickedDate, useSelectedTreatmentId };
