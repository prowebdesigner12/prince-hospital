
import React from 'react';
import { DEPARTMENTS } from '../constants';
import type { Department } from '../types';

const DepartmentCard: React.FC<{ department: Department }> = ({ department }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
                    {department.icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{department.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{department.description}</p>
                </div>
            </div>
        </div>
    );
};

const DepartmentsSection: React.FC = () => {
  // Split departments into two rows for the marquee
  const half = Math.ceil(DEPARTMENTS.length / 2);
  const row1Depts = DEPARTMENTS.slice(0, half);
  const row2Depts = DEPARTMENTS.slice(half);

  // Duplicate arrays for seamless scrolling effect
  const scrollingRow1 = [...row1Depts, ...row1Depts, ...row1Depts];
  const scrollingRow2 = [...row2Depts, ...row2Depts, ...row2Depts];

  return (
    <section id="departments" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-2">Departments</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Various Multispeciality Departments Available in Prince Hospital
            </h2>
        </div>

        {/* Scrolling cards */}
        <div className="flex flex-col gap-8">
            {/* Row 1 Scroller */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group">
              <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]">
                {scrollingRow1.map((department, index) => (
                  <li key={`r1a-${index}`} className="flex-shrink-0 w-96">
                    <DepartmentCard department={department} />
                  </li>
                ))}
              </ul>
              <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                {scrollingRow1.map((department, index) => (
                  <li key={`r1b-${index}`} className="flex-shrink-0 w-96">
                    <DepartmentCard department={department} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Row 2 Scroller (reverse direction) */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group">
              <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                {scrollingRow2.map((department, index) => (
                  <li key={`r2a-${index}`} className="flex-shrink-0 w-96">
                    <DepartmentCard department={department} />
                  </li>
                ))}
              </ul>
              <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
                {scrollingRow2.map((department, index) => (
                  <li key={`r2b-${index}`} className="flex-shrink-0 w-96">
                    <DepartmentCard department={department} />
                  </li>
                ))}
              </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DepartmentsSection;
