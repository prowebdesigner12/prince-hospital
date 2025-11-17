
import React from 'react';

interface TermsAndConditionsProps {
  navigateTo: (page: string) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ navigateTo }) => {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-b pb-4">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold text-blue-800">1. Agreement to Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Prince Hospital's website if you do not agree to take all of the terms and conditions stated on this page. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Prince Hospital and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">3. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Publishing any Website material in any other media;</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>Publicly performing and/or showing any Website material;</li>
            <li>Using this Website in any way that is or may be damaging to this Website;</li>
            <li>Using this Website in any way that impacts user access to this Website;</li>
            <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-800">4. No Warranties</h2>
          <p>
            This Website is provided “as is,” with all faults, and Prince Hospital expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as providing medical advice to you. The content on this website is for informational purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">5. Limitation of Liability</h2>
          <p>
            In no event shall Prince Hospital, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Prince Hospital, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">6. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Rajasthan for the resolution of any disputes.
          </p>
        </div>
        <div className="mt-12 text-center">
            <button onClick={() => navigateTo('home')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
              Back to Home
            </button>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
