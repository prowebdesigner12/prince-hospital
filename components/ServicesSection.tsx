import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group h-full">
        <div className="relative overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <a href={service.href} className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" aria-label={`Learn more about ${service.title}`}>
                <i className="fas fa-arrow-right text-blue-600"></i>
            </a>
        </div>
        <div className="p-6">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">{service.category}</p>
            <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                <a href={service.href}>{service.title}</a>
            </h3>
        </div>
    </div>
);

const ServicesSection: React.FC = () => {
    // Duplicate services for seamless scroll
    const scrollingServices = [...SERVICES, ...SERVICES];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-2">Our Services</p>
                    <h2 className="text-4xl font-bold text-blue-900">Explore Our Medical Services</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">High-quality care for a wide range of medical needs, ensuring your well-being.</p>
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group">
                    <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]">
                        {scrollingServices.map((service, index) => (
                            <li key={`a-${index}`} className="flex-shrink-0 w-80">
                                <ServiceCard service={service} />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {scrollingServices.map((service, index) => (
                            <li key={`b-${index}`} className="flex-shrink-0 w-80">
                                <ServiceCard service={service} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;