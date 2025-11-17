import React from 'react';
import { AWARDS } from '../constants';

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Awards & Recognitions</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our commitment to excellence has been recognized by numerous prestigious organizations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {AWARDS.map((award, index) => (
            <div key={index} className="text-center">
                <img 
                    src={award.image} 
                    alt={award.title}
                    className="h-20 mx-auto grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
                <p className="text-sm font-semibold text-gray-700 mt-4">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;