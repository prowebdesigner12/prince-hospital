import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg relative h-full flex flex-col justify-between">
        <div>
            <i className="fas fa-quote-left text-5xl text-blue-100 absolute top-4 left-6 -z-1"></i>
            <p className="text-gray-600 italic mb-6 z-10 relative">{testimonial.quote}</p>
        </div>
        <div className="text-right mt-4">
            <p className="font-bold text-blue-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
    </div>
);


const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What Our Patients Say</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Stories of healing and hope from those we've had the privilege to serve.</p>
        </div>
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group"
        >
          <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]">
            {TESTIMONIALS.map((testimonial, index) => (
              <li key={`a-${index}`} className="flex-shrink-0 w-96">
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
          <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {TESTIMONIALS.map((testimonial, index) => (
              <li key={`b-${index}`} className="flex-shrink-0 w-96">
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;