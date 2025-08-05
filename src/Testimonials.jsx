import React from 'react';
import { theme, testimonials, StarIcon } from './utils';

const TestimonialCard = ({ testimonial }) => (
    <div className="p-6 flex flex-col items-center text-center shadow-lg" style={{ backgroundColor: theme.colors.lightGray, borderRadius: theme.rounded }}>
        <div className="flex mb-2">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < testimonial.rating} />)}
        </div>
        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover my-4" />
        <h3 className="font-bold text-lg" style={{fontFamily: theme.fonts.body}}>{testimonial.name}</h3>
        <p className="text-sm text-gray-500 mb-4" style={{fontFamily: theme.fonts.body}}>{testimonial.location}</p>
        <p className="text-gray-700" style={{fontFamily: theme.fonts.body, fontSize: theme.fontSizes.paragraph}}>
            {testimonial.review}
        </p>
    </div>
);

const Testimonials = () => (
    <section style={{ backgroundColor: theme.colors.primaryYellow }} className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="container mx-auto">
            <h2 className="text-4xl text-center font-bold mb-12" style={{ fontFamily: theme.fonts.display }}>
                What Customers says:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((item) => (
                    <TestimonialCard key={item.name} testimonial={item} />
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
