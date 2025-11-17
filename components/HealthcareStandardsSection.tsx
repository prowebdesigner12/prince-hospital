
import React, { useEffect, useRef, useState } from 'react';
import { BENEFITS } from '../constants';
import type { Benefit } from '../types';

const BenefitCard: React.FC<{ benefit: Benefit, isVisible: boolean, delay: number }> = ({ benefit, isVisible, delay }) => {
    return (
        <div 
            className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="group bg-white rounded-lg p-6 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        {benefit.icon}
                    </div>
                    <div className="flex-grow">
                        <a href={benefit.href} className="text-xl font-bold text-blue-900 mb-3 inline-block">{benefit.title}</a>
                        <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                        <a href={benefit.href} className="font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:translate-x-1">
                                <g clipPath="url(#clip0_5927_10791)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 0.833008C4.04188 0.833008 0.833252 4.04163 0.833252 7.99967C0.833252 11.9577 4.04188 15.1663 7.99992 15.1663C11.958 15.1663 15.1666 11.9577 15.1666 7.99967C15.1666 4.04163 11.958 0.833008 7.99992 0.833008ZM7.33325 5.33301C7.06359 5.33301 6.82052 5.49543 6.71732 5.74455C6.61415 5.99367 6.67119 6.28042 6.86185 6.47108L7.72379 7.33301L5.52851 9.52827C5.26817 9.78861 5.26817 10.2107 5.52851 10.4711C5.78887 10.7314 6.21097 10.7314 6.47133 10.4711L8.66659 8.27581L9.52852 9.13774C9.71919 9.32841 10.0059 9.38547 10.2551 9.28227C10.5042 9.17907 10.6666 8.93601 10.6666 8.66634V5.99967C10.6666 5.63149 10.3681 5.33301 9.99992 5.33301H7.33325Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5927_10791">
                                        <rect width="16" height="16" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const HealthcareStandardsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                     <h5 className={`flex items-center justify-center font-semibold text-blue-600 mb-4 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '100ms'}}>
                        Prince Hospital
                        <span className="mx-2">|</span>
                        Why Choose Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none" className="ml-2">
                            <path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#02015A" strokeWidth="1.5"></path>
                        </svg>
                    </h5>
                    <h2 className={`text-3xl md:text-4xl font-bold text-blue-900 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                        Your Premier Choice for Exceptional Healthcare
                    </h2>
                </div>

                <div className="relative bg-blue-50/30 p-4 md:p-8 rounded-2xl">
                     <div className="absolute top-8 right-8 opacity-20 -z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow" width="75" height="80" viewBox="0 0 75 80" fill="none">
                            <path d="M74.0861 24.6187L68.8392 15.3742C68.5025 14.7708 68.0485 14.2406 67.5038 13.8147C66.9591 13.3888 66.3346 13.0757 65.6671 12.8939C64.9995 12.7121 64.3023 12.6651 63.6164 12.7559C62.9304 12.8466 62.2696 13.0731 61.6725 13.4222L48.0834 21.5111V5.33333C48.0957 3.9317 47.55 2.58254 46.5661 1.58243C45.5822 0.582328 44.2407 0.0131427 42.8366 0H31.9582C30.554 0.0131427 29.2125 0.582328 28.2286 1.58243C27.2448 2.58254 26.699 3.9317 26.7113 5.33333V21.5111L13.1116 13.4293C12.5145 13.0803 11.8536 12.8537 11.1677 12.763C10.4817 12.6723 9.78452 12.7192 9.11698 12.901C8.44944 13.0828 7.82499 13.3959 7.28027 13.8218C6.73555 14.2477 6.28152 14.7779 5.94482 15.3813L0.708663 24.6187C0.010396 25.8424 -0.17966 27.2905 0.179256 28.6524C0.538172 30.0143 1.41748 31.1817 2.62859 31.904L16.4136 40L2.62146 48.096C1.41156 48.8195 0.533753 49.9873 0.176194 51.3492C-0.181366 52.711 0.0097817 54.1585 0.708663 55.3813L5.95194 64.6258C6.28864 65.2292 6.74267 65.7594 7.28739 66.1853C7.83212 66.6112 8.45656 66.9243 9.1241 67.1061C9.79165 67.2879 10.4888 67.3348 11.1748 67.2441C11.8607 67.1534 12.5216 66.9268 13.1187 66.5778L26.7113 58.4889V74.6667C26.7207 76.0783 27.2866 77.4294 28.2866 78.4276C29.2866 79.4258 30.6402 79.9907 32.0544 80H42.7404C44.1546 79.9907 45.5082 79.4258 46.5082 78.4276C47.5081 77.4294 48.0741 76.0783 48.0834 74.6667V58.4889L61.6832 66.5849C62.2802 66.934 62.9411 67.1605 63.6271 67.2512C64.313 67.342 65.0102 67.295 65.6778 67.1132C66.3453 66.9314 66.9698 66.6184 67.5145 66.1924C68.0592 65.7665 68.5132 65.2363 68.8499 64.6329L74.0968 55.3884C74.795 54.1647 74.9851 52.7166 74.6262 51.3547C74.2673 49.9928 73.388 48.8254 72.1768 48.1031L58.3847 40L72.1768 31.904C73.3861 31.1799 74.2632 30.0118 74.6201 28.65C74.977 27.2882 74.7853 25.8411 74.0861 24.6187Z" fill="#d1e5ff"></path>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-0">
                        {BENEFITS.map((benefit, index) => (
                            <BenefitCard 
                                key={benefit.title} 
                                benefit={benefit}
                                isVisible={isVisible}
                                delay={300 + index * 100}
                            />
                        ))}
                    </div>
                    {/* Central Shield Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center pointer-events-none">
                         <div className={`
                            bg-blue-600 text-white rounded-2xl shadow-xl transition-all duration-500 ease-out
                            w-40 h-44 flex flex-col items-center justify-center p-4
                            transform
                            ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
                        `} style={{ transitionDelay: '700ms', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <span className="text-2xl font-bold tracking-wider">HEALTH</span>
                            <span className="text-4xl font-light">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthcareStandardsSection;
