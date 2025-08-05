// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Only BrowserRouter needed here
import { theme } from './Utils';

// Import the new AppRouterContent component
import AppRouterContent from './AppRouterContent';

// --- App Component ---
export default function App() {
  return (
    <>
      {/* Global styles applied to the body */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Markazi+Text:wght@400;500&display=swap');
          body {
            background-color: ${theme.colors.lightGray};
            color: ${theme.colors.darkGray};
            margin: 0;
            font-family: 'Karla', sans-serif;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      {/* BrowserRouter wraps the entire application to enable routing */}
      <BrowserRouter>
        {/* Render the AppRouterContent component inside the router context */}
        <AppRouterContent />
      </BrowserRouter>
    </>
  );
}
