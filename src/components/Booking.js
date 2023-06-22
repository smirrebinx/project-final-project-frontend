import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { setSelectedTreatment } from '../reducers/treatments';
import 'react-calendar/dist/Calendar.css';
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
  const [pickedDate, setPickedDate] = useState(new Date());

  // Access the selected treatment ID from the Redux store
  const selectedTreatment = useSelector((store) => store.treatments.selectedTreatment);

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

  // Use the useNavigate hook to get the navigate function for navigation
  const navigate = useNavigate();

  const handleConfirmDate = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ treatmentId: selectedTreatment, pickedDate })
    };

    const url = API_URL('bookTreatment');

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your treatment has been booked.',
          confirmButtonColor: 'var(--submit-button-color-two)'
        });
        dispatch(setSelectedTreatment(null)); // Clear the selected treatment after booking
        navigate('/userinfo'); // Navigate to /userinfo
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'We\'re sorry, your treatment could not be booked. Please, try again.',
          confirmButtonColor: 'var(--submit-button-color-two)'
        });
      }
    } catch (error) {
      console.log('Error occurred while booking treatment:', error);
    }
  };

  return (
    <CalendarContainer>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>Pick a Treatment Date</StyledNavHeaderTwo>
      </StickyNavTwo>
      {!accessToken && (
        <div>
          <StyledParagraphAnimation>
            Please log in to book a treatment.
          </StyledParagraphAnimation>
          <StyledLink to="/login">Log in</StyledLink>
        </div>
      )}
      {accessToken && (
        <div>
          <StyledParagraphBooking>Welcome, pick a treatment date</StyledParagraphBooking>
          {pickedDate && (
            <p> Selected Date: {pickedDate.toLocaleDateString('en-GB')}
            </p>
          )}
          <StyledButton type="submit" onClick={handleConfirmDate}>
            Confirm Date
          </StyledButton>
        </div>
      )}
      <PickedDateContext.Provider value={pickedDate}>
        <Calendar onChange={handleDateChange} value={pickedDate} locale="en-GB" minDate={new Date()} />
      </PickedDateContext.Provider>
    </CalendarContainer>
  );
};

const usePickedDate = () => useContext(PickedDateContext);

export default Booking;
export { usePickedDate };
