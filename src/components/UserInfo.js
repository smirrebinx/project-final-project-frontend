import React from 'react';
import { usePickedDate } from './Booking';

const UserInfo = () => {
  const pickedDate = usePickedDate();

  // Use the pickedDate value in the component

  return (
    <div>
      <h1>User Information</h1>
      <p>Picked Date: {pickedDate}</p>
    </div>
  );
};

export default UserInfo;
