import React from 'react';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

interface AboutPageProps {
  navigateTo: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <main className="bg-gray-50 font-['Outfit']">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 lg:py-40 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 68, 120, 0.8), rgba(7, 40, 65, 0.85)), url('https://static01.nyt.com/images/2025/02/19/multimedia/19pitt-doctors-tkgf/19pitt-doctors-tkgf-jumbo.jpg?quality=75&auto=webp')"}}>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>About Prince Hospital</h1>
                <p className="text-lg lg:text-xl max-w-3xl mx-auto text-blue-100">
                    Excellence in Care, Humanity at Heart
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-24 space-y-16 lg:space-y-24">
            
            {/* Introduction & Director's Message Section */}
            <section>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-3/5 w-full">
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">A Message from Our Director</h2>
                        <h3 className="text-xl text-gray-600 mt-1">Dr. Piyush Sunda</h3>
                        <blockquote className="mt-6 border-l-4 border-blue-600 pl-6 py-2">
                            <p className="text-2xl font-medium text-gray-700 italic leading-snug">
                                “Our mission behind the Prince Hospital is to uphold excellence in care by bringing AIIMS-level expertise, advanced healthcare technology, and expert & trusted doctors.”
                            </p>
                        </blockquote>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            And when we say “humanity at heart,” we truly mean it. Every patient who walks through our doors is cared for with compassion, respect, and genuine concern. We do everything we can to offer the best treatment, the right guidance, and accessible healthcare that always puts their well-being first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="bg-white p-8 lg:p-16 rounded-3xl shadow-lg">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                     <div className="lg:w-1/2 w-full">
                        <img 
                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop" 
                            alt="Prince Academy of Higher Education" 
                            className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-sm font-bold uppercase text-blue-500 tracking-widest">About Prince Hospital</h3>
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mt-2">A Venture by Prince Academy of Higher Education</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                           Prince Academy of Higher Education runs Prince Hospital, the same trusted institution known for its excellence in academics, discipline, and world-class education. Prince Hospital is built on the legacy of Prince Academy; the hospital upholds the same commitment to quality, integrity, and healthcare service to the people.
                        </p>
                         <p className="mt-4 text-lg font-semibold text-blue-800">
                           “Prince Hospital is all about excellence in healthcare, compassionate care, and world-class treatment for every patient.”
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Key Features Section */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Our Pillars of Strength</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">The foundations that make Prince Hospital a trusted name in healthcare.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<i className="fas fa-star text-3xl"></i>}
                        title="AIIMS-Standard Care"
                        description="A 700-bed hospital with 70 ICU wards, expert doctors, and state-of-the-art healthcare technology, backed by advanced machinery."
                    />
                    <FeatureCard
                        icon={<i className="fas fa-sitemap text-3xl"></i>}
                        title="30+ Speciality Departments"
                        description="Comprehensive care under one roof, from General Medicine to advanced super-specialities like Cancer Care, Cardiology, and Neurosurgery, each led by experienced doctors."
                    />
                    <FeatureCard
                        icon={<i className="fas fa-hospital text-3xl"></i>}
                        title="Only Tertiary Hospital in the Region"
                        description="As the only tertiary care center between Jaipur & Bikaner, we handle the most serious, rare, and complex medical conditions with highly specialised, advanced treatment."
                    />
                </div>
            </section>

             <div className="mt-8 text-center">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-home mr-2"></i>
                  Back to Home
                </button>
            </div>

        </div>
    </main>
  );
};

export default AboutPage;
