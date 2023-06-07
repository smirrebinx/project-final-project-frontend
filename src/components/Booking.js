import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer } from './BookingStyling';

const Booking = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarContainer>
      <Calendar onChange={onChange} value={value} locale="en-GB" />
    </CalendarContainer>
  );
}

export default Booking;