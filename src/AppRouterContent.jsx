// src/AppRouterContent.jsx
import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Button from './Button';

// Import your page components
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

// --- Functions for useReducer ---

// Reducer function to update available times based on action
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = new Date(action.payload.date);
    if (window.fetchAPI) {
      return window.fetchAPI(selectedDate);
    } else {
      console.warn("window.fetchAPI is not available yet for date update.");
      return state;
    }
  }
  if (action.type === 'SET_INITIAL_TIMES') {
    return action.payload.times;
  }
  return state;
}

// Function to initialize the available times state
export function initializeTimes() {
  return []; // Return an empty array initially, actual fetch happens in useEffect
}

// --- AppRouterContent Component ---
function AppRouterContent() {
  // Initialize availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // useNavigate hook for programmatic navigation - NOW CALLED WITHIN ROUTER CONTEXT
  const navigate = useNavigate();

  // Function to handle form submission to the API
  const submitForm = (formData) => {
    if (window.submitAPI) {
      if (window.submitAPI(formData)) {
        navigate('/confirmed'); // Navigate to confirmation page on successful submission
      } else {
        alert("Booking failed. Please try again.");
      }
    } else {
      console.error("window.submitAPI is not available.");
      alert("API not loaded. Booking cannot be submitted.");
    }
  };

  // Use useEffect to perform the initial API call after the component mounts
  useEffect(() => {
    if (window.fetchAPI) {
      const today = new Date();
      const initialTimes = window.fetchAPI(today);
      dispatch({ type: 'SET_INITIAL_TIMES', payload: { times: initialTimes } });
    } else {
      const retryInterval = setInterval(() => {
        if (window.fetchAPI) {
          clearInterval(retryInterval);
          const today = new Date();
          const initialTimes = window.fetchAPI(today);
          dispatch({ type: 'SET_INITIAL_TIMES', payload: { times: initialTimes } });
        }
      }, 100);
    }
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      <Header /> {/* Header will appear on all pages */}
      <Routes>
        {/* Route for the Homepage */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Specials />
              <Testimonials />
              <About />
              <Button/>
            </main>
          }
        />
        {/* Route for the Booking Page */}
        <Route
          path="/book"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // Pass submitForm function as prop
            />
          }
        />
        {/* Route for the new booking confirmation page */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer /> {/* Footer will appear on all pages */}
    </>
  );
}

export default AppRouterContent;
