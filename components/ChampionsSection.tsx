
import React from 'react';
import { SUPER_SPECIALTIES } from '../constants';
import type { SuperSpecialty } from '../types';

const SuperSpecialtyCard: React.FC<{ specialty: SuperSpecialty }> = ({ specialty }) => (
    <a href="#" className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden group h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 transform">
        <div className="h-2/3 overflow-hidden">
            <img src={specialty.image} alt={specialty.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="h-1/3 p-4 flex items-center justify-center">
            <h3 className="font-bold text-center text-gray-800 text-base group-hover:text-blue-600 transition-colors duration-300">{specialty.name}</h3>
        </div>
    </a>
);


const ChampionsSection: React.FC = () => {
    const scrollingSpecialties = [...SUPER_SPECIALTIES, ...SUPER_SPECIALTIES];

    return (
        <section className="py-20 bg-gray-50 font-['Figtree']">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Super Speciality Department in Prince Hospital</h2>
                <div className="bg-gradient-to-r from-white to-[#e0f2ff] rounded-2xl shadow-lg p-8 relative overflow-hidden">
                    
                    <div className="flex flex-col md:flex-row items-center relative z-10">
                        {/* Left Side */}
                        <div className="md:w-1/3 w-full mb-8 md:mb-0 text-center md:text-left">
                            <div className="inline-block relative mb-4">
                               <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -top-6 -left-8 text-blue-400">
                                   <path d="M40,0 L60,0 L60,40 L100,40 L100,60 L60,60 L60,100 L40,100 L40,60 L0,60 L0,40 L40,40 Z" fill="currentColor" />
                               </svg>
                               <svg width="30" height="30" viewBox="0 0 100 100" className="absolute -top-4 -left-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 50 H20 L30 30 L45 70 L60 40 L70 50 H95" />
                               </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-blue-800 mt-4">Prince Hospital</h3>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">Offers these</p>
                            <p className="text-xl font-bold text-teal-500 mt-4">Super Speciality Departments</p>
                            <div className="flex items-end justify-center md:justify-start mt-8 space-x-6 h-16">
                                <i className="fas fa-stethoscope text-5xl text-gray-500"></i>
                                <i className="fas fa-pills text-6xl text-gray-500"></i>
                            </div>
                        </div>

                        {/* Right Side - Scrolling Marquee */}
                        <div className="md:w-2/3 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group">
                            <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]">
                                {scrollingSpecialties.map((specialty, index) => (
                                    <li key={`a-${index}`} className="flex-shrink-0 w-64 h-72">
                                        <SuperSpecialtyCard specialty={specialty} />
                                    </li>
                                ))}
                            </ul>
                             <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                                {scrollingSpecialties.map((specialty, index) => (
                                    <li key={`b-${index}`} className="flex-shrink-0 w-64 h-72">
                                        <SuperSpecialtyCard specialty={specialty} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChampionsSection;