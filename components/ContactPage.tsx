import React from 'react';

interface ContactPageProps {
  navigateTo: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  return (
    <main className="bg-gray-50 font-['Outfit'] py-20">
      <div className="container mx-auto px-4">
        
        {/* "Managed by" Banner */}
        <div className="bg-purple-100/60 border border-purple-200/80 rounded-2xl p-6 flex items-center gap-6 mb-12 max-w-5xl mx-auto shadow-sm">
            <div className="bg-white text-purple-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <i className="fas fa-briefcase text-3xl"></i>
            </div>
            <div>
                <h2 className="text-xl font-bold text-purple-900">Managed by Prince Academy of Higher Education</h2>
                <p className="text-purple-800 mt-1">
                    Prince Hospital Sikar is run and managed under Prince Academy of Higher Education, ensuring excellence in healthcare delivery and medical education.
                </p>
            </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-red-50">
              <i className="fas fa-map-marker-alt text-4xl text-red-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Location</h3>
            <div className="text-gray-600 flex-grow mb-6">
              <p>Bajor, Sikar</p>
              <p>Rajasthan, India</p>
            </div>
            <a href="https://www.google.com/maps/place/Prince+Hospital/@27.6027581,75.1437159,17z/data=!3m1!4b1!4m6!3m5!1s0x396cbb2155555555:0x3e521073b6422933!8m2!3d27.6027534!4d75.1462908!16s%2Fg%2F11b_2w7n0z?entry=ttu" target="_blank" rel="noopener noreferrer" className="bg-red-100 text-red-700 font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-red-200">
              Tap to Action
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-blue-50">
              <i className="fas fa-envelope text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Email Us</h3>
            <div className="text-gray-600 flex-grow mb-6">
              <a href="mailto:contact@princehospital.in" className="hover:underline block">contact@princehospital.in</a>
              <a href="mailto:hr@princehospital.in" className="hover:underline block">hr@princehospital.in</a>
            </div>
            <a href="mailto:contact@princehospital.in" className="bg-blue-100 text-blue-700 font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-blue-200">
              Tap to Action
            </a>
          </div>

          {/* Call Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-green-50">
              <i className="fas fa-phone-alt text-4xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Call Us</h3>
            <div className="text-gray-600 flex-grow mb-6">
              <a href="tel:+917230032108" className="hover:underline block">+91 72300 32108</a>
              <a href="tel:+917230032108" className="hover:underline block">+91 72300 32108</a>
            </div>
            <a href="tel:+917230032108" className="bg-green-100 text-green-700 font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-green-200">
              Tap to Action
            </a>
          </div>
        </div>

         <div className="mt-16 text-center">
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

export default ContactPage;
