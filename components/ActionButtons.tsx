import React from 'react';

const ActionButtons: React.FC = () => {
  return (
    <div className="relative z-20 container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-lg shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a href="#" className="flex items-center justify-center p-4 rounded-lg text-blue-800 font-semibold hover:bg-blue-100 transition-colors duration-300 transform hover:-translate-y-1">
                <i className="fas fa-map-marker-alt mr-3 text-3xl text-blue-600"></i>
                <span className="text-lg">Location</span>
            </a>
            <a href="#" className="flex items-center justify-center p-4 rounded-lg text-red-600 font-semibold hover:bg-red-100 transition-colors duration-300 transform hover:-translate-y-1 border-0 md:border-l md:border-r border-gray-200">
                <i className="fas fa-exclamation-circle mr-3 text-3xl"></i>
                <span className="text-lg">Emergency Cell</span>
            </a>
            <a href="#" className="flex items-center justify-center p-4 rounded-lg text-blue-800 font-semibold hover:bg-blue-100 transition-colors duration-300 transform hover:-translate-y-1">
                <i className="fas fa-ambulance mr-3 text-3xl text-blue-600"></i>
                <span className="text-lg">Ambulance</span>
            </a>
        </div>
    </div>
  );
};

export default ActionButtons;