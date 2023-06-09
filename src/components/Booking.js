// import React, { useState } from 'react';
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
// import { CalendarContainer } from './BookingStyling';

// const Booking = () => {
//   const [value, onChange] = useState(new Date());

//   return (
//     <CalendarContainer>
//       <Calendar onChange={onChange} value={value} locale="en-GB" />
//     </CalendarContainer>
//   );
// }

// export default Booking;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    // <DatePicker selected={date} onChange={handleDateChange} showTimeSelect dateFormat="Pp" />
  );
};

export default Booking;