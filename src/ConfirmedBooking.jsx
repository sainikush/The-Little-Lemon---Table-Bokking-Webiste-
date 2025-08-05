// src/ConfirmedBooking.jsx
import React from 'react';

function ConfirmedBooking() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#EDEFEE', // Light gray background
      minHeight: 'calc(100vh - 200px)', // Adjust height based on header/footer
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Karla, sans-serif' // Consistent font
    }}>
      <h1 style={{
        color: '#495E57', // Little Lemon Green
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        Booking Confirmed!
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: '#333'
      }}>
        Your table has been successfully reserved.
      </p>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginTop: '10px'
      }}>
        We look forward to seeing you at Little Lemon!
      </p>
    </div>
  );
}

export default ConfirmedBooking;
