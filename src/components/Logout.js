import React from 'react';

const Logout = ({ handleCloseLogout, handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();
    handleCloseLogout();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
      <div style={{ background: 'white', padding: '16px' }}>
        <p>Are you sure you want to log out?</p>
        <button type="button" onClick={handleLogoutClick}>Log out</button>
        <button type="button" onClick={handleCloseLogout}>Cancel</button>
      </div>
    </div>
  );
};

export default Logout;
