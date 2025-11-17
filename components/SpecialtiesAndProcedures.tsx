
import React, { useState } from 'react';
import { TABBED_SERVICES_247, ADVANCED_TECHNOLOGY } from '../constants';
import type { TabbableListItem } from '../types';

const TabButton: React.FC<{ title: string; isActive: boolean; onClick: () => void; }> = ({ title, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`py-2 px-4 font-semibold text-lg transition-colors duration-300 ${isActive ? 'text-white bg-green-500 rounded-md' : 'text-gray-600 hover:text-blue-600'}`}
    >
        {title}
    </button>
);

const ListItem: React.FC<{ item: TabbableListItem }> = ({ item }) => (
    <a href={item.href} className="group flex items-center p-3 rounded-md transition-colors duration-300 hover:bg-blue-600">
        <div className="w-12 h-12 mr-4 flex-shrink-0 flex items-center justify-center">
            {item.icon ? (
                <div className="text-blue-600 group-hover:text-white text-3xl transition-colors duration-300">
                    {item.icon}
                </div>
            ) : (
                <>
                    <img src={item.iconBlueUrl} alt="" className="h-8 w-8 object-contain transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden" />
                    <img src={item.iconWhiteUrl} alt="" className="h-8 w-8 object-contain transition-opacity duration-300 opacity-0 hidden group-hover:opacity-100 group-hover:block" />
                </>
            )}
        </div>
        <span className="text-gray-700 font-medium group-hover:text-white">{item.name}</span>
    </a>
);

const SpecialtiesAndProcedures: React.FC = () => {
    const [activeTab, setActiveTab] = useState('services');

    const renderContent = () => {
        const items = activeTab === 'services' ? TABBED_SERVICES_247 : ADVANCED_TECHNOLOGY;
        return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {items.map((item) => (
                        <ListItem key={item.name} item={item} />
                    ))}
                </div>
                 <a href="#" className="inline-flex items-center text-blue-600 font-semibold mt-6 hover:underline">
                    View all
                    <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </a>
            </div>
        );
    };

    return (
        <section id="specialities" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:gap-12">
                    {/* Left Column: Tabs and Content */}
                    <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-blue-600">
                            24*7 Services & Advanced Technology
                        </h2>

                        <div className="flex items-center space-x-4 mb-6 border-b">
                           <TabButton title="24*7 Services" isActive={activeTab === 'services'} onClick={() => setActiveTab('services')} />
                           <TabButton title="Advanced Technology" isActive={activeTab === 'technology'} onClick={() => setActiveTab('technology')} />
                        </div>

                        {renderContent()}
                    </div>

                    {/* Right Column: Expert Callout */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative bg-blue-900 rounded-2xl p-8 lg:p-12 overflow-hidden text-white group">
                            {/* Animated Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-400/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDuration: '8s' }}></div>
                            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sky-400/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDuration: '10s', animationDelay: '-3s' }}></div>

                            {/* Doctor Image */}
                            <img 
                                src="https://www.maxhealthcare.in/img/doctor-consult-illustration.svg" 
                                className="absolute -bottom-8 -right-8 w-64 lg:w-80 h-auto transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2 z-10" 
                                alt="Doctor Consultation Illustration" 
                            />
                            
                            {/* Content */}
                            <div className="relative z-20">
                                <h3 className="text-3xl lg:text-4xl font-bold mb-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                    Explore Departments at Prince Hospital
                                </h3>
                                <p className="text-blue-100 mb-8 max-w-sm">
                                    Prince Hospital is home to over 30 multispecialty and superspecialty departments, including General Medicine, Cardiology, Neurosurgery, Oncology, and more.
                                    Discover every department and learn how our expert teams deliver advanced, compassionate care.
                                </p>
                                <a 
                                    href="#" 
                                    className="inline-flex items-center bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105 group/button"
                                >
                                    Explore Departments
                                    <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover/button:translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesAndProcedures;
