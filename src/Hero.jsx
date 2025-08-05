import React from 'react';
import { theme } from './utils';
import Button from './Button';
import heroImage from './assets/restauranfood.jpg'; // Import the image from the assets folder

const Hero = () => (
  <section style={{ backgroundColor: theme.colors.primaryGreen }} className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 text-white">
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.displayTitle, lineHeight: '1' }}>Little Lemon</h1>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.subTitle, lineHeight: '1' }}>Chicago</h2>
        <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.leadText }} className="max-w-md">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button className="mt-4">Reserve a table</Button>
      </div>
      <div className="relative h-64 md:h-80 lg:h-96">
        <img
          src={heroImage} // Use the imported image variable here
          alt="Delicious bruschetta"
          className="absolute top-0 right-0 w-3/4 h-full object-cover"
          style={{ borderRadius: theme.rounded }}
        />
      </div>
    </div>
  </section>
);

export default Hero;
