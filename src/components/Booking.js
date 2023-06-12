import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { CalendarContainer, StyledButton, StyledParagraphBooking } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import Footer from './Footer';
import { StyledLink, StyledParagraphAnimation } from './GlobalStyling';

const PickedDateContext = createContext();
const SelectedTreatmentIdContext = createContext();

const Booking = ({ location }) => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(new Date());
  const userAccessToken = useSelector((store) => store.user.accessToken);
  const selectedTreatmentId = location?.state?.treatmentId;

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
      <CalendarContainer>
        <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
          <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
        </StickyNavTwo>
        {!userAccessToken && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
            <StyledParagraphAnimation> Please log in to book a treatment.</StyledParagraphAnimation>
            <StyledLink to="/login">Log in</StyledLink>
          </div>
        )}
        {userAccessToken && (
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
