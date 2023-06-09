/* eslint-disable max-len */
import React, { useEffect, createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer, StyledHeaderBooking, StyledParagraphBooking } from './BookingStyling';

// Create a new context for the picked date
const PickedDateContext = createContext();

const Booking = () => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const userAccessToken = useSelector((store) => store.user.accessToken);

  const handleDateChange = (date) => {
    setPickedDate(date);
  };

  useEffect(() => {
    if (!userAccessToken) {
      setTimeout(() => {
        window.location.href = '/login';
      }, 6000); // Wait for 6 seconds before redirecting to /login
    }
  }, [userAccessToken]);

  const renderMessage = () => {
    return (
      <>
        <StyledHeaderBooking>Calendar</StyledHeaderBooking>
        {userAccessToken ? (
          <StyledParagraphBooking>Pick a treatment date</StyledParagraphBooking>
        ) : (
          <StyledParagraphBooking>You will be redirected to another page to log in or register before you can pick a treatment date.</StyledParagraphBooking>
        )}
      </>
    );
  };

  return (
    <CalendarContainer>
      {renderMessage()}
      <PickedDateContext.Provider value={pickedDate}>
        <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" />
      </PickedDateContext.Provider>
    </CalendarContainer>
  );
};

// A custom hook to access the picked date from any component
const usePickedDate = () => useContext(PickedDateContext);

export default Booking;
export { usePickedDate };
