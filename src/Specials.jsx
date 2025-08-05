import React from 'react';
import { theme, specials, ScooterIcon } from './Utils';
import Button from './Button';

const SpecialsCard = ({ special }) => (
  <div className="flex flex-col overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-2" style={{ backgroundColor: theme.colors.lightGray, borderRadius: theme.rounded }}>
    <img src={special.image} alt={special.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-bold" style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.cardTitle }}>{special.title}</h3>
        {special.price && <p className="font-medium" style={{ color: theme.colors.secondarySalmon, fontFamily: theme.fonts.body }}>{special.price}</p>}
      </div>
      <p className="text-gray-600 flex-grow" style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.paragraph }}>
        {special.description}
      </p>
      <a href="#" className="font-bold mt-4 self-start" style={{ fontFamily: theme.fonts.body, color: theme.colors.darkGray }}>
        Order a delivery <ScooterIcon />
      </a>
    </div>
  </div>
);

const Specials = () => (
  <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl font-bold" style={{ fontFamily: theme.fonts.display }}>Specials</h2>
        <Button>Online Menu</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specials.map((item) => (
          <SpecialsCard key={item.title} special={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Specials;
