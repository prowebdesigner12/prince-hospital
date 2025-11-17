import React from 'react';
import { INFO_CARDS } from '../constants';
import type { InfoCard } from '../types';

const Card: React.FC<{ card: InfoCard }> = ({ card }) => (
    <a 
        href="#" 
        className={`flex items-center p-5 rounded-2xl w-80 lg:w-96 h-28 ${card.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
        aria-label={`${card.title}${card.description ? `: ${card.description}` : ''}`}
    >
        <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shadow-inner" aria-hidden="true">
            {card.icon}
        </div>
        <div className={`flex-grow ${card.textColor}`}>
            <h3 className="font-bold text-lg lg:text-xl leading-tight">{card.title}</h3>
            {card.description && <p className="text-sm opacity-90 mt-1 leading-tight">{card.description}</p>}
        </div>
    </a>
);

const SCROLLING_CARDS = [...INFO_CARDS, ...INFO_CARDS, ...INFO_CARDS];

const InfoCardsSection: React.FC = () => {
  return (
    <section className="relative z-10 -mt-16 py-8">
        <div 
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group"
        >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]">
            {SCROLLING_CARDS.map((card, index) => (
                <li key={`a-${index}`} className="flex-shrink-0">
                <Card card={card} />
                </li>
            ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {SCROLLING_CARDS.map((card, index) => (
                <li key={`b-${index}`} className="flex-shrink-0">
                <Card card={card} />
                </li>
            ))}
            </ul>
        </div>
    </section>
  );
};

export default InfoCardsSection;