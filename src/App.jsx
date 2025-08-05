import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import { theme } from './Utils';
import Button from './Button';

export default function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Markazi+Text:wght@400;500&display=swap');
          body { background-color: ${theme.colors.lightGray}; color: ${theme.colors.darkGray}; }
        `}
      </style>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Button/>
      <Footer />
    </>
  );
}
