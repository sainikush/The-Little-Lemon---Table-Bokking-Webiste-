// src/BookingForm.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect for validation logic

// BookingForm accepts availableTimes, dispatch, and submitForm as props
function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Local state for each form field
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '17:00'); // Default to first available time
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // State for validation status of each field
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [isGuestsValid, setIsGuestsValid] = useState(false);
  const [isOccasionValid, setIsOccasionValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // Overall form validity

  // Validation functions
  const validateDate = (value) => {
    return value !== ''; // Date must not be empty
  };
  const validateTime = (value) => {
    return availableTimes.includes(value); // Time must be one of the available times
  };
  const validateGuests = (value) => {
    return value >= 1 && value <= 10; // Guests must be between 1 and 10
  };
  const validateOccasion = (value) => {
    return value !== ''; // Occasion must not be empty
  };

  // Handlers for input changes, including validation updates
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setIsDateValid(validateDate(newDate)); // Validate and update state
    dispatch({ type: 'UPDATE_TIMES', payload: { date: newDate } }); // Dispatch action to update times
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    setIsTimeValid(validateTime(newTime));
  };

  const handleGuestsChange = (e) => {
    const newGuests = parseInt(e.target.value);
    setGuests(newGuests);
    setIsGuestsValid(validateGuests(newGuests));
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
    setIsOccasionValid(validateOccasion(newOccasion));
  };

  // useEffect to re-evaluate overall form validity whenever individual field validities change
  useEffect(() => {
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  }, [isDateValid, isTimeValid, isGuestsValid, isOccasionValid]);

  // Initial validation when component mounts or relevant props/state change
  useEffect(() => {
    // This ensures initial state of form validity is set correctly based on initial values
    setIsDateValid(validateDate(date));
    setIsTimeValid(validateTime(time));
    setIsGuestsValid(validateGuests(guests));
    setIsOccasionValid(validateOccasion(occasion));
  }, [date, time, guests, occasion, availableTimes]); // Re-validate if initial values or availableTimes change

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    if (isFormValid) { // Only submit if form is valid
      submitForm({ date, time, guests, occasion });
    } else {
      alert('Please fill out all fields correctly before submitting.'); // Basic feedback for invalid form
    }
  };

  return (
    <form style={{
      display: 'grid',
      maxWidth: '350px',
      gap: '20px',
      margin: '0 auto',
      padding: '25px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Karla, sans-serif'
    }} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '15px' }}>Make Your Reservation</h2>

      {/* Date Input */}
      <label htmlFor="res-date" style={{ fontWeight: 'bold', color: '#555' }}>Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange} // Use the specific handler for date changes
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
      />

      {/* Time Select */}
      <label htmlFor="res-time" style={{ fontWeight: 'bold', color: '#555' }}>Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange} // Use specific handler for time changes
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
      >
        {/* Populate options from availableTimes PROP */}
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>

      {/* Number of Guests Input */}
      <label htmlFor="guests" style={{ fontWeight: 'bold', color: '#555' }}>Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange} // Use specific handler for guests changes
        required
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
      />

      {/* Occasion Select */}
      <label htmlFor="occasion" style={{ fontWeight: 'bold', color: '#555' }}>Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange} // Use specific handler for occasion changes
        required // Added required attribute
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
      >
        <option value="">Select an Occasion</option> {/* Added a default empty option */}
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button */}
      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid} // Disable button if form is not valid
        style={{
          padding: '12px 20px',
          backgroundColor: '#F4CE14', // Little Lemon's yellow
          color: '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: isFormValid ? 'pointer' : 'not-allowed', // Change cursor based on disabled state
          fontSize: '18px',
          fontWeight: 'bold',
          marginTop: '15px',
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          opacity: isFormValid ? 1 : 0.6 // Reduce opacity when disabled
        }}
        onMouseOver={e => isFormValid && (e.currentTarget.style.backgroundColor = '#FFD700')} // Lighter yellow on hover only if valid
        onMouseOut={e => isFormValid && (e.currentTarget.style.backgroundColor = '#F4CE14')} // Back to original on mouse out only if valid
      />
    </form>
  );
}

export default BookingForm;
