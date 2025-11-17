
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoCardsSection from './components/InfoCardsSection';
import NewAboutSection from './components/NewAboutSection';
import HealthcareStandardsSection from './components/HealthcareStandardsSection';
import SpecialtiesAndProcedures from './components/SpecialtiesAndProcedures';
import FacilitiesSection from './components/FacilitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';
import HowItWorksSection from './components/HowItWorksSection';
import CtaSection from './components/CtaSection';
import DepartmentsSection from './components/ProcessSection';
import BackToTopButton from './components/BackToTopButton';
import ChampionsSection from './components/ChampionsSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string, sectionId?: string) => {
    if (page === 'home' && sectionId) {
        // If we are already on the home page, just scroll.
        if (currentPage === 'home') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not on home page, switch to home and then scroll.
            setCurrentPage('home');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100); // Delay to allow home page to render.
        }
    } else {
        // Just navigate to a different page.
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy navigateTo={navigateTo} />;
      case 'terms':
        return <TermsAndConditions navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <InfoCardsSection />
            <NewAboutSection />
            <DepartmentsSection />
            <ChampionsSection />
            <SpecialtiesAndProcedures />
            <FacilitiesSection />
            <HealthcareStandardsSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CtaSection />
            <FaqSection />
            <CareersSection />
          </main>
        );
    }
  };
  
  const isHomePageView = currentPage === 'home';

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header navigateTo={navigateTo} />
      <div key={currentPage}>
        {renderPage()}
      </div>
      <Footer navigateTo={navigateTo} />
      {isHomePageView && <FloatingActionButtons />}
      <BackToTopButton />
    </div>
  );
};

export default App;
