// src/BookingPage.jsx
import React from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component

// BookingPage now accepts availableTimes, dispatch, and submitForm as props from App.jsx
function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#EDEFEE', // Light gray background
      minHeight: 'calc(100vh - 200px)', // Adjust height based on header/footer
      fontFamily: 'Karla, sans-serif' // Consistent font
    }}>
      <h1 style={{
        color: '#495E57', // Little Lemon Green
        fontSize: '2.5rem',
        marginBottom: '10px'
      }}>
        Reserve a Table
      </h1>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '30px',
        color: '#666'
      }}>
        Fill out the form below to book your table at Little Lemon.
      </p>
      {/* Render the BookingForm component and pass down the received props */}
      <BookingForm
        availableTimes={availableTimes} // Pass availableTimes to BookingForm
        dispatch={dispatch}           // Pass dispatch to BookingForm
        submitForm={submitForm}       // Pass submitForm to BookingForm
      />
    </div>
  );
}

export default BookingPage;
