
import React from 'react';

const CareersSection: React.FC = () => {
  return (
    <section id="careers" className="bg-blue-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
        <p className="text-blue-200 max-w-2xl mx-auto mb-8">
          Be a part of a team that is dedicated to making a difference in the lives of others. Explore our open positions and start your journey with Prince Hospital.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          View Open Positions
        </a>
      </div>
    </section>
  );
};

export default CareersSection;
