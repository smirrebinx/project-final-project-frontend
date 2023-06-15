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
        margin: '2.3rem',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        border: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
      <div style={{ background: 'white', padding: '16px' }}>
        <p>Are you sure you want to log out?</p>
        <button style={{ cursor: 'pointer', background: 'transparent', padding: '0.4rem', border: '2px solid var(--submit-button-color-two)', borderRadius: '0.25rem', margin: '1rem' }} type="button" onClick={handleLogoutClick}>Log out</button>
        <button style={{ cursor: 'pointer', background: 'transparent', padding: '0.4rem', border: '2px solid var(--submit-button-color-two)', borderRadius: '0.25rem', margin: '1rem' }} type="button" onClick={handleCloseLogout}>Cancel</button>
      </div>
    </div>
  );
};

export default Logout;
