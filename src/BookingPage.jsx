// src/BookingPage.jsx
import React from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component

function BookingPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#495E57' }}>Reserve a Table</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        Fill out the form below to book your table at Little Lemon.
      </p>
      <BookingForm /> {/* Render the BookingForm component */}
    </div>
  );
}

export default BookingPage;
