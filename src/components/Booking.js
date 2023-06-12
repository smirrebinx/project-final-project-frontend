/* eslint-disable max-len */
import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { CalendarContainer, StyledParagraphBooking } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import Footer from './Footer';
import { StyledLink } from './GlobalStyling';

// Create a new context for the picked date
const PickedDateContext = createContext();
// Create a new context for the selected treatment ID
const SelectedTreatmentIdContext = createContext();

const Booking = ({ location }) => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(new Date());
  const userAccessToken = useSelector((store) => store.user.accessToken);
  const selectedTreatmentId = location?.state?.treatmentId; // Get the selected treatment ID from location state

  const handleDateChange = (date) => {
    setPickedDate(date);
    console.log('Picked Date:', date);
  };

  return (
    <>
      {/* Calendar container */}
      <CalendarContainer>
        {/* Sticky navigation bar */}
        <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
          <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
        </StickyNavTwo>
        {/* Display login message if user is not logged in */}
        {!userAccessToken && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
            <StyledParagraphBooking> Please log in to book a treatment.</StyledParagraphBooking>
            <StyledLink to="/login">Log in</StyledLink>
          </div>
        )}
        {/* Provide the picked date through context */}
        <PickedDateContext.Provider value={pickedDate}>
          {/* Provide the selected treatment ID through context */}
          <SelectedTreatmentIdContext.Provider value={selectedTreatmentId}>
            {/* Calendar component */}
            <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" minDate={new Date()} />
          </SelectedTreatmentIdContext.Provider>
        </PickedDateContext.Provider>
      </CalendarContainer>
      {/* Footer component */}
      <Footer />
    </>
  );
};

// Custom hooks to access the picked date and selected treatment ID from any component
const usePickedDate = () => useContext(PickedDateContext);
const useSelectedTreatmentId = () => useContext(SelectedTreatmentIdContext);

export default Booking;
export { usePickedDate, useSelectedTreatmentId };
