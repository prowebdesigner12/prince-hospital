
import React from 'react';
import { FACILITIES } from '../constants';
import type { Facility } from '../types';

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 h-full">
        <div className="flex-shrink-0">
            {facility.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
    </div>
);


const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Our Facilities</h2>
          <p className="text-lg text-gray-600 mt-2">State-of-the-art infrastructure for patient comfort and care.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group"
        >
          <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]">
            {FACILITIES.map((facility, index) => (
              <li key={`a-${index}`} className="flex-shrink-0 w-80">
                <FacilityCard facility={facility} />
              </li>
            ))}
          </ul>
          <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {FACILITIES.map((facility, index) => (
              <li key={`b-${index}`} className="flex-shrink-0 w-80">
                <FacilityCard facility={facility} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;