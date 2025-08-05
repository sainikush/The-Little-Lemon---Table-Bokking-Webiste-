import React from 'react';

// --- Import local images ---
import greekSaladImg from './assets/greek salad.jpg';
import bruschettaImg from './assets/bruchetta.svg';
import lemonDessertImg from './assets/lemon dessert.jpg';
// Note: Testimonial images are placeholders as specific files were not provided.
// To use a real image, you would import it like this:
// import sainiImg from './assets/saini.jpg';

// Helper to construct class names
export const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- FONT & COLOR DEFINITIONS (from UI Kit) ---
export const theme = {
  colors: {
    primaryGreen: '#495E57',
    primaryYellow: '#F4CE14',
    secondarySalmon: '#EE9972',
    secondaryPeach: '#FBDABB',
    lightGray: '#EDEFEE',
    darkGray: '#333333',
  },
  fonts: {
    display: 'Markazi Text, serif',
    body: 'Karla, sans-serif',
  },
  fontSizes: {
    displayTitle: '4rem', // 64pt
    subTitle: '2.5rem', // 40pt
    leadText: '1.125rem', // 18pt
    cardTitle: '1.125rem', // 18pt
    paragraph: '1rem', // 16pt
  },
  rounded: '16px',
};

// --- SVG ICONS ---
export const ScooterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-2">
    <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><path d="M15 17.5h-4.5l-3-6M6.5 17.5H3V9.8c0-1.4 1.1-2.3 2.5-2.3H8"/><path d="M15 9.8h3.5c1.4 0 2.5.9 2.5 2.3v0c0 1.4-1.1 2.3-2.5 2.3H15V9.8z"/>
  </svg>
);

export const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? theme.colors.primaryYellow : 'none'} stroke={theme.colors.primaryYellow} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);


// --- MOCK DATA ---
export const specials = [
  {
    image: greekSaladImg,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    image: bruschettaImg,
    title: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes.',
  },
  {
    image: lemonDessertImg,
    title: 'Lemon Dessert',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const testimonials = [
  {
    rating: 5,
    name: 'Vivek',
    location: 'Pune, Nagar',
    image: 'https://placehold.co/100x100/333333/FFFFFF?text=V',
    review: '"Sometime its feels to know this restaurant serves the best food on the Menu than our problems."',
  },
  {
    rating: 5,
    name: 'Saini',
    location: 'Pune, Nagar',
    image: 'https://placehold.co/100x100/333333/FFFFFF?text=S',
    review: '"Sometime its feels to know this restaurant serves the best food on the Menu than our problems."',
  },
  {
    rating: 5,
    name: 'Salil',
    location: 'Pune, Nagar',
    image: 'https://placehold.co/100x100/333333/FFFFFF?text=S',
    review: '"Sometime its feels to know this restaurant serves the best food on the Menu than our problems."',
  },
  {
    rating: 5,
    name: 'Vikki',
    location: 'Pune, Nagar',
    image: 'https://placehold.co/100x100/333333/FFFFFF?text=V',
    review: '"Sometime its feels to know this restaurant serves the best food on the Menu than our problems."',
  },
];
