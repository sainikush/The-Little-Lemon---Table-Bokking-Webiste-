// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import { theme } from './Utils'; // Assuming 'theme' is correctly exported from Utils
import Button from './Button'; // Assuming Button component is used on homepage

// Import your new BookingPage component
import BookingPage from './BookingPage';

export default function App() {
  return (
    <>
      {/* Global styles applied to the body */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Markazi+Text:wght@400;500&display=swap');
          body { background-color: ${theme.colors.lightGray}; color: ${theme.colors.darkGray}; margin: 0; }
          /* Add more global styles if needed */
        `}
      </style>

      {/* BrowserRouter wraps the entire application to enable routing */}
      <BrowserRouter>
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
                {/* Assuming Button is part of the homepage content */}
                <Button/> 
              </main>
            } 
          />
          {/* Route for the Booking Page */}
          <Route path="/book" element={<BookingPage />} />
          {/* You can add more routes for other pages here */}
        </Routes>
        <Footer /> {/* Footer will appear on all pages */}
      </BrowserRouter>
    </>
  );
}
