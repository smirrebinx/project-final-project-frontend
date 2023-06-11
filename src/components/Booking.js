/* eslint-disable max-len */
import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { CalendarContainer } from './BookingStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import useSticky from './useSticky';
import Footer from './Footer';

// Create a new context for the picked date
const PickedDateContext = createContext();

const Booking = () => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(new Date());
  const userAccessToken = useSelector((store) => store.user.accessToken);

  const handleDateChange = (date) => {
    setPickedDate(date);
  };

  return (
    <>
      <CalendarContainer>
        <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
          <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
        </StickyNavTwo>
        {!userAccessToken && (
          <div>
            <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
            <p>You need to log in to book a treatment.</p>
            <Link to="/login">Log in</Link>
          </div>
        )}
        <PickedDateContext.Provider value={pickedDate}>
          <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" />
        </PickedDateContext.Provider>
      </CalendarContainer>
      <Footer />
    </>
  );
};

// A custom hook to access the picked date from any component
const usePickedDate = () => useContext(PickedDateContext);

export default Booking;
export { usePickedDate };
