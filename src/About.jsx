import React from 'react';
import { theme } from './utils';
import chefsImage from './assets/Mario and Adrian A.jpg'; // Assuming this is the filename for the chefs
import foodImage from './assets/greek salad.jpg'; // Using greek salad as the second image

const About = () => (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h1 style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.displayTitle, lineHeight: '1' }}>Little Lemon</h1>
                <h2 style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.subTitle, lineHeight: '1' }}>Chicago</h2>
                <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.leadText }} className="max-w-md">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <div className="relative h-80">
                <img
                    src={chefsImage}
                    alt="Little Lemon chefs"
                    className="absolute top-0 right-0 w-2/3 h-full object-cover shadow-xl"
                    style={{ borderRadius: theme.rounded, transform: 'rotate(5deg)' }}
                />
                 <img
                    src={foodImage}
                    alt="Little Lemon food"
                    className="absolute bottom-0 left-0 w-2/3 h-full object-cover shadow-xl"
                    style={{ borderRadius: theme.rounded, transform: 'rotate(-5deg)' }}
                />
            </div>
        </div>
    </section>
);

export default About;
