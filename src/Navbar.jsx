// src/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from './assets/Logo.svg'; // Assuming you still want the logo in your NavBar

const NavBar = () => {
  // Define the navigation links with their corresponding routes
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/book' }, // Changed to '/book' route
    { name: 'Order Online', path: '/order-online' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12 bg-white shadow-md rounded-lg mx-auto my-4 max-w-7xl">
      {/* Logo on the left, linking to home */}
      <Link to="/">
        <img src={Logo} alt="Little Lemon Logo" className="h-12 w-auto rounded-full" />
      </Link>

      {/* Navigation links for medium and larger screens */}
      <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path} // Use 'to' prop for React Router Link
              className="text-lg font-medium uppercase tracking-wider text-gray-700 transition-colors duration-200 hover:text-yellow-500 rounded-md px-3 py-2"
              // Removed inline style for font family, better to manage in CSS
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger menu for small screens (you might need to implement this functionality) */}
      <div className="md:hidden">
        {/* Placeholder for a hamburger icon/button */}
        <button className="text-gray-700 hover:text-yellow-500 focus:outline-none focus:text-yellow-500">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
