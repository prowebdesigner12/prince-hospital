

import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 font-['Figtree']">
            <div className="container mx-auto px-4">
                <div className="bg-blue-900 rounded-tl-2xl rounded-br-2xl rounded-tr-[60px] rounded-bl-[60px] p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                        {/* Left Content */}
                        <div className="lg:w-3/5 text-white text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                Visit Us
                            </h2>
                            <div className="space-y-4 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                                <p>
                                    <strong>Prince Hospital:</strong><br/> 
                                    Jaipur-Sikar Road, Bajor, Gokulpura Bypass, Sikar, Rajasthan
                                </p>
                            </div>
                        </div>

                        {/* Right Map */}
                        <div className="w-full lg:w-2/5 xl:w-1/3">
                            <div className="bg-blue-800 text-white p-8 rounded-tl-[40px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl shadow-2xl h-full">
                                <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                                <p className="mb-6 opacity-90">
                                    Find us easily on the map.
                                </p>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative group">
                                    <img 
                                        src="https://placehold.co/600x400/e0f2ff/004478?text=Map+of+Prince+Hospital" 
                                        alt="Map showing location of Prince Hospital" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href="https://www.google.com/maps/place/Prince+Hospital/@27.6027581,75.1437159,17z/data=!3m1!4b1!4m6!3m5!1s0x396cbb2155555555:0x3e521073b6422933!8m2!3d27.6027534!4d75.1462908!16s%2Fg%2F11b_2w7n0z?entry=ttu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-blue-800 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
                                        >
                                            <i className="fas fa-map-location-dot"></i>
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;