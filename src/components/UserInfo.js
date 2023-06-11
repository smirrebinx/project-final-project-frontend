import React from 'react';
import { usePickedDate } from './Booking';
import Footer from './Footer';

const UserInfo = () => {
  const pickedDate = usePickedDate();

  // Use the pickedDate value in the component

  return (
    <>
      <div>
        <h1>User Information</h1>
        <p>Picked Date: {pickedDate}</p>
      </div><Footer />
    </>
  );
};

export default UserInfo;
