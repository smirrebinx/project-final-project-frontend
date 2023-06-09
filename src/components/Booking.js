import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { setPickedDate } from 'reducers/calendarBooking';
import { CalendarContainer } from './BookingStyling';

const Booking = () => {
  const dispatch = useDispatch();
  const pickedDate = useSelector((store) => store.calendarBooking.pickedDate);
  const userAccessToken = useSelector((store) => store.user.accessToken);

  const handleDateChange = (date) => {
    dispatch(setPickedDate(date));
  };

  useEffect(() => {
    if (!userAccessToken) {
      window.location.href = '/login';
    }
  }, [userAccessToken]);

  return (
    <CalendarContainer>
      <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" />
    </CalendarContainer>
  );
};

export default Booking;
