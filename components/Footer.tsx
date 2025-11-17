
import React from 'react';

interface FooterProps {
  navigateTo: (page: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
        navigateTo(href.substring(1));
    } else if (href.startsWith('#')) {
        navigateTo('home', href.substring(1));
    } else {
        navigateTo('home');
    }
  };

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Prince Hospital</h4>
            <p className="text-sm leading-relaxed mb-6">
              Run and Managed by Prince Academy of Higher Education
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1DqNeXWpPZ/" target="_blank" rel="noopener noreferrer" aria-label="Prince Hospital on Facebook" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="https://www.instagram.com/princehospitalsikar?igsh=ZzVybXY0bHNrYWNr" target="_blank" rel="noopener noreferrer" aria-label="Prince Hospital on Instagram" className="text-gray-400 hover:text-white"><i className="fab fa-instagram text-xl"></i></a>
              <a href="https://youtube.com/@princehospitalsikar?si=WVDDWLUFxPb3X8BJ" target="_blank" rel="noopener noreferrer" aria-label="Prince Hospital on YouTube" className="text-gray-400 hover:text-white"><i className="fab fa-youtube text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="hover:text-white cursor-pointer">About Us</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="hover:text-white cursor-pointer">Contact Us</a></li>
              <li className="pt-2 mt-2 border-t border-gray-700"><a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="hover:text-white cursor-pointer">Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => handleNavClick(e, '/terms')} className="hover:text-white cursor-pointer">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-4">Download App</h4>
            <div className="flex flex-col space-y-3">
                <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center hover:bg-gray-700">
                    <i className="fab fa-apple text-2xl mr-3"></i>
                    <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-sm font-semibold">App Store</p>
                    </div>
                </a>
                 <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center hover:bg-gray-700">
                    <i className="fab fa-google-play text-2xl mr-3"></i>
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-sm font-semibold">Google Play</p>
                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Prince Academy of Higher Education. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="hover:text-white cursor-pointer">Privacy Policy</a>
            <span className="opacity-50">|</span>
            <a href="/terms" onClick={(e) => handleNavClick(e, '/terms')} className="hover:text-white cursor-pointer">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
