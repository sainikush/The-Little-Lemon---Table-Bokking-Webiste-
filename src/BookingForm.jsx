// src/BookingForm.jsx
import React, { useState } from 'react';

function BookingForm() {
  // Step 3: Define state variables for each form field
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Default time
  const [guests, setGuests] = useState(1); // Default guests
  const [occasion, setOccasion] = useState('Birthday'); // Default occasion

  // For now, hardcode availableTimes as a stateful array
  // In a future exercise, this might come from an API or prop
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    // Here you would typically send the form data to an API
    console.log({ date, time, guests, occasion });
    alert('Reservation submitted! Check your console for details.'); // Using alert for now as per instructions, but consider a custom modal in a real app.
  };

  return (
    <form style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Make Your Reservation</h2>

      {/* Date Input */}
      <label htmlFor="res-date" style={{ fontWeight: 'bold' }}>Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {/* Time Select */}
      <label htmlFor="res-time" style={{ fontWeight: 'bold' }}>Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      >
        {/* Step 3: Populate options from availableTimes state */}
        {availableTimes.map((t, index) => (
          <option key={index}>{t}</option>
        ))}
      </select>

      {/* Number of Guests Input */}
      <label htmlFor="guests" style={{ fontWeight: 'bold' }}>Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {/* Occasion Select */}
      <label htmlFor="occasion" style={{ fontWeight: 'bold' }}>Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)} 
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      {/* Submit Button */}
      <input 
        type="submit" 
        value="Make Your reservation" 
        style={{ 
          padding: '12px 20px', 
          backgroundColor: '#F4CE14', // Little Lemon's yellow
          color: '#333', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          fontSize: '16px', 
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      />
    </form>
  );
}

export default BookingForm;
