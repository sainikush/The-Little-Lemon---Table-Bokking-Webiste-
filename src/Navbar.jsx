import React from 'react';
import { theme } from './utils';

const NavBar = () => {
  const navLinks = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-6 lg:space-x-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-medium uppercase tracking-wider transition-colors duration-200 hover:text-yellow-400"
              style={{ fontFamily: theme.fonts.body }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
