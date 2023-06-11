import React from 'react';
import { usePickedDate } from './Booking';
import Footer from './Footer';
import { OuterWrapper } from './GlobalStyling';

const UserInfo = () => {
  const pickedDate = usePickedDate();

  // Use the pickedDate value in the component

  return (
    <OuterWrapper>
      <div>
        <h1>User Information</h1>
        <p>Picked Date: {pickedDate}</p>
      </div><Footer />
    </OuterWrapper>
  );
};

export default UserInfo;
