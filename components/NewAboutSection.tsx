import React, { useState, useEffect, useRef } from 'react';
import { ABOUT_STATS } from '../constants';
import type { AboutStat } from '../types';

const AnimatedStat: React.FC<{ stat: AboutStat; isVisible: boolean }> = ({ stat, isVisible }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLHeadingElement>(null);

    const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
    const suffix = stat.value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (isVisible && !isNaN(numericValue)) {
            let start = 0;
            const duration = 2000;
            const startTime = Date.now();

            const frame = () => {
                const now = Date.now();
                const progress = (now - startTime) / duration;
                if (progress < 1) {
                    setCount(Math.min(numericValue, Math.floor(numericValue * progress)));
                    requestAnimationFrame(frame);
                } else {
                    setCount(numericValue);
                }
            };
            requestAnimationFrame(frame);
        }
    }, [isVisible, numericValue]);

    return (
        <div className="text-center p-2">
            <h2 ref={ref} className="text-4xl md:text-5xl font-bold text-blue-900">
                {isNaN(numericValue) ? stat.value : `${count}${suffix}`}
            </h2>
            <p className="text-gray-600 mt-2">{stat.label}</p>
        </div>
    );
};

const AnimatedHeadline: React.FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => {
    return (
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6" aria-label={text}>
            {text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden pb-1 mr-2">
                    <span 
                        className={`inline-block transition-transform duration-700 ease-out transform`}
                        style={{ transitionDelay: `${wordIndex * 100}ms`, transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </h2>
    );
};


const NewAboutSection: React.FC = () => {
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

    const headline = "Prince Hospital - A Venture of Prince Academy of Higher Education";

    return (
        <section ref={sectionRef} id="about-new" className="py-20 bg-white overflow-hidden relative">
            {/* Background Medical Elements */}
            <div className="absolute inset-0 z-0 opacity-50">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="plus-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M49 40 V50 H40 V52 H49 V62 H51 V52 H60 V50 H51 V40 Z" fill="#e0f2fe" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#plus-pattern)" opacity="0.2"/>
                </svg>
                 <div className="absolute top-1/4 left-1/4 w-48 h-24 opacity-20 text-blue-200" style={{animation: 'float 6s ease-in-out infinite'}}>
                    <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="0,20 20,20 25,10 35,30 45,15 55,25 60,20 100,20" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left: Image Composition */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative h-[500px] flex items-center justify-center">
                           {/* Decorative Blob */}
                           <div className={`absolute w-full h-full -top-4 -left-4 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#eff6ff" d="M47.7,-64.4C61.8,-53.4,73.3,-38.7,78.2,-22.1C83.1,-5.5,81.4,12.9,73.1,27.5C64.9,42.1,50.1,52.9,34.8,61.1C19.5,69.4,3.7,75.1,-12.3,74.7C-28.3,74.3,-44.5,67.8,-56.9,56.4C-69.3,45,-77.9,28.8,-79.8,11.8C-81.7,-5.2,-76.9,-23,-66.9,-35.9C-56.9,-48.8,-41.7,-56.9,-27.3,-64.8C-12.9,-72.7,-.2,-80.4,13,-79.8C26.1,-79.1,33.5,-75.4,47.7,-64.4Z" transform="translate(100 100) scale(1.1)" />
                                </svg>
                            </div>
                           {/* Image 1 */}
                            <div className={`absolute w-4/5 h-4/5 top-0 left-0 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-10 -rotate-6'}`} style={{transitionDelay: '300ms'}}>
                                <img src="https://picsum.photos/seed/doctorcare/600/700" alt="Caring doctor" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
                            </div>
                            {/* Image 2 */}
                             <div className={`absolute w-3/5 h-3/5 bottom-0 right-0 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-6'}`} style={{transitionDelay: '500ms'}}>
                                <img src="https://picsum.photos/seed/hospitalroom/500/500" alt="Modern hospital interior" className="rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-white" />
                            </div>
                        </div>
                    </div>
                    {/* Right: Content */}
                    <div className="lg:w-1/2 w-full">
                         <h5 className={`flex items-center font-semibold text-blue-600 mb-4 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '200ms'}}>
                            Prince Hospital
                            <span className="mx-2">|</span>
                            About Us
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none" className="ml-2">
                                <path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#02015A" strokeWidth="1.5"></path>
                            </svg>
                        </h5>
                        <AnimatedHeadline text={headline} isVisible={isVisible} />
                        <p className={`text-gray-600 leading-relaxed mb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '400ms'}}>
                            Prince Hospital, run by Prince Academy of Higher Education, is Shekhawati’s first 700-bed hospital and the only tertiary care centre between Bikaner and Jaipur. Bringing AIIMS-standard healthcare to the region, it is equipped with state-of-the-art technology, modern infrastructure, and advanced medical facilities to serve patients with the highest standards of treatment and care. Our mission is simple — deliver the highest standard of treatment, diagnosis, and emergency care without requiring patients to travel to metro cities.
                        </p>
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={stat.label} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${600 + index * 100}ms`}}>
                                    <AnimatedStat stat={stat} isVisible={isVisible} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewAboutSection;