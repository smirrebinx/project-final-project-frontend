import React from 'react';

const ValidationInfo = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        border: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
      <div style={{ background: 'white', padding: '16px' }}>
        <h3>Validation Information</h3>
        <p>First and Last Name: Between 2-30 characters</p>
        <p>Mobile Phone: Only numbers</p>
        <p>Password: Between 15-20 characters</p>
        <button
          style={{
            cursor: 'pointer',
            background: 'transparent',
            padding: '0.4rem',
            border: '2px solid var(--submit-button-color-two)',
            borderRadius: '0.25rem',
            margin: '1rem',
            color: '#000',
            width: '4rem'
          }}
          type="button"
          onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ValidationInfo;
