import React from 'react';

interface FeatureCardProps {
  image: string;
  icon: string;
  title: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, icon, title, href }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="overflow-hidden h-64">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-8 relative text-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <i className={`fas ${icon} text-3xl`}></i>
            </div>
            <div className="pt-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
                <a href={href} className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link inline-flex items-center">
                    <span>READ MORE</span>
                    <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
            </div>
        </div>
    </div>
);

const FeatureSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10">
                    <FeatureCard 
                        image="https://images.pexels.com/photos/5794042/pexels-photo-5794042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        icon="fa-calendar-check"
                        title="Make An Online Appointment"
                        href="#appointment"
                    />
                    <FeatureCard 
                        image="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        icon="fa-user-doctor"
                        title="Meet Professional Expert Doctors"
                        href="#doctors"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;