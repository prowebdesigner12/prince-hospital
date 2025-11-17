import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import type { HowItWorksStep } from '../types';

const StepCard: React.FC<{
  step: HowItWorksStep;
  isActive: boolean;
  onHover: () => void;
  bgColor: string;
}> = ({ step, isActive, onHover, bgColor }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`relative cursor-pointer rounded-[40px] p-6 transition-all duration-700 ease-in-out ${
        isActive ? 'lg:flex-[3]' : 'lg:flex-[1]'
      } ${bgColor}`}
      role="listitem"
    >
      {/* Collapsed content: Hidden on mobile, shown on desktop when not active */}
      <div
        className={`hidden lg:flex h-full flex-col justify-between items-center transition-opacity duration-300 ${
          !isActive ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'
        }`}
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-700 shadow">
          {step.step}
        </div>
        <h3
          className={`[writing-mode:vertical-lr] rotate-180 font-semibold tracking-wider uppercase text-center text-gray-700`}
        >
          {step.title}
        </h3>
        <div /> {/* For spacing */}
      </div>

      {/* Expanded content: Shown on mobile, shown on desktop when active */}
      <div
        className={`flex flex-col h-full lg:opacity-0 lg:pointer-events-none transition-opacity duration-500 lg:delay-300 ${
          isActive ? 'lg:opacity-100 lg:pointer-events-auto' : ''
        }`}
      >
        <div className="flex-shrink-0">
            <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold mb-4 text-violet-600 shadow`}>
            {step.step}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {step.description}
            </p>
        </div>
        <div className="flex-grow mt-4 rounded-2xl overflow-hidden shadow-inner h-64 lg:h-auto">
            <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};


const HowItWorksSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardColors = ['bg-violet-100', 'bg-sky-100', 'bg-fuchsia-100', 'bg-rose-100'];

    return (
        <section 
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h5 className="font-semibold text-blue-600 mb-2">Our Process</h5>
                    <h2 className="text-4xl font-bold text-blue-900">Your Path to Wellness</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        A Step-by-Step Guide to Our Care Process
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:h-[550px] gap-4" role="list">
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <StepCard 
                            key={step.step} 
                            step={step} 
                            isActive={activeIndex === index} 
                            onHover={() => setActiveIndex(index)} 
                            bgColor={cardColors[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
