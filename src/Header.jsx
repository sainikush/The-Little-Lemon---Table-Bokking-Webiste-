import React from 'react';
import NavBar from './NavBar';

const Header = () => (
  <header className="py-4 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
    <div className="container mx-auto flex items-center justify-between">
       
      <NavBar />
      <button className="md:hidden text-3xl">☰</button>
    </div>
  </header>
);

export default Header;
