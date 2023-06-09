/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const pickedDate = useSelector((state) => state.yourReduxSlice.pickedDate); // Replace 'yourReduxSlice' with the actual name of your Redux slice

  return (
    <div>
      <h2>Summary Page</h2>
      <p>Picked Date: {pickedDate.toString()}</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default UserInfo;
