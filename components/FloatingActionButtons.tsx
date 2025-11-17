import React from 'react';

const FloatingButton: React.FC<{ href: string; icon: string; text: string; colorClasses: string }> = ({ href, icon, text, colorClasses }) => (
    <a
        href={href}
        className={`group relative flex items-center my-1.5 rounded-l-full shadow-lg transition-all duration-300 ease-in-out ${colorClasses} h-12 w-12 hover:w-40`}
    >
        <div className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center">
             <i className={`fas ${icon} text-white text-xl`}></i>
        </div>
        <span className="absolute left-14 text-white font-semibold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {text}
        </span>
    </a>
);

const FloatingActionButtons: React.FC = () => {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 flex flex-col">
            <FloatingButton 
                href="#" 
                icon="fa-map-marker-alt" 
                text="Location" 
                colorClasses="bg-blue-600 hover:bg-blue-700" 
            />
            <FloatingButton 
                href="#" 
                icon="fa-exclamation-circle" 
                text="Emergency Cell" 
                colorClasses="bg-red-600 hover:bg-red-700" 
            />
            <FloatingButton 
                href="#" 
                icon="fa-ambulance" 
                text="Ambulance" 
                colorClasses="bg-blue-600 hover:bg-blue-700" 
            />
        </div>
    );
};

export default FloatingActionButtons;