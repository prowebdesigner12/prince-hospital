import React, { useState, useEffect, useRef } from 'react';
import { HERO_STATS } from '../constants';
import type { HeroStat } from '../types';

const FloatingElement: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
    const elRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const randomDuration = Math.floor(Math.random() * 10) + 10;
        const randomDelay = Math.floor(Math.random() * 10);
        if (elRef.current) {
            elRef.current.style.animationDuration = `${randomDuration}s`;
            elRef.current.style.animationDelay = `${randomDelay}s`;
        }
    }, []);

    return <div ref={elRef} className="absolute bg-white/10 rounded-full" style={{ ...style, animationName: 'float', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}></div>;
};

const StatCard: React.FC<{ stat: HeroStat }> = ({ stat }) => (
    <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl min-w-[150px] text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
        <div className="text-4xl font-bold mb-2 text-[#9ac8d4]">{stat.value}</div>
        <div className="text-base opacity-90">{stat.label}</div>
    </div>
);

const Hero: React.FC = () => {
    const [typedText, setTypedText] = useState('Humanity at Heart');
    const words = ['Humanity at Heart', 'Humanity at Heart', 'Humanity at Heart'];

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: number;

        const typeWriter = () => {
            const currentWord = words[wordIndex];
            const currentText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
            
            setTypedText(currentText);
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length + 1) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before new word
            }
            
            timeoutId = setTimeout(typeWriter, typeSpeed);
        };
        
        timeoutId = setTimeout(typeWriter, 1000);
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <section 
            id="home"
            className="relative min-h-[90vh] flex items-center text-white overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 68, 120, 0.822), rgba(7, 40, 65, 0.8)), url('https://static01.nyt.com/images/2025/02/19/multimedia/19pitt-doctors-tkgf/19pitt-doctors-tkgf-jumbo.jpg?quality=75&auto=webp')`
            }}
        >
            <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
                <FloatingElement style={{ width: '100px', height: '100px', top: '20%', left: '10%' }} />
                <FloatingElement style={{ width: '80px', height: '80px', top: '70%', left: '80%' }} />
                <FloatingElement style={{ width: '60px', height: '60px', top: '40%', left: '60%' }} />
                <FloatingElement style={{ width: '120px', height: '120px', top: '80%', left: '20%' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                        Excellence in Care <span className="text-[#9ac8d4] min-h-[60px] sm:min-h-[72px] inline-block">{typedText}</span>
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 max-w-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                        Prince Hospital — Run by Prince Academy of Higher Education
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-[#0da547] text-white py-3 px-8 rounded-full font-bold transition-all duration-300 ease-in-out shadow-lg flex items-center justify-center gap-2 hover:bg-[#0088cc] hover:-translate-y-0.5 hover:shadow-xl" style={{boxShadow: '0 4px 6px rgba(0,0,0,0.2)'}}>
                            <i className="far fa-calendar-alt"></i> Book Appointment
                        </button>
                        <button className="bg-transparent text-white py-3 px-8 rounded-full font-bold border-2 border-white transition-all duration-300 ease-in-out hover:bg-white/10">
                            <i className="fas fa-user-md"></i> Explore Departments
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8">
                        {HERO_STATS.map(stat => (
                            <StatCard key={stat.label} stat={stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;