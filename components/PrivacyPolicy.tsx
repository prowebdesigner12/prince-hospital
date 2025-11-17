
import React from 'react';

interface PrivacyPolicyProps {
  navigateTo: (page: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ navigateTo }) => {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-b pb-4">Prince Hospital Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            At Prince Hospital, protecting your personal and health information is our top priority. We use your information only to provide the best possible treatment and healthcare services. Both hospital patients and website users can be assured that their shared data will remain safe and confidential, whether collected online or offline.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">Information We Collect From You</h2>
          <p>
            We collect three categories of data from you. The first one is your personal information, which includes your name, age, gender, and address, phone number, etc. The second type of data includes medical information, such as your health records, test reports, ongoing treatment details, prescriptions, and diagnoses. The last one is Online Data, which includes payment information, IP addresses of your devices, appointment booking forms, cookies, and website usage data.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">How We Use Your Information?</h2>
          <p>
            As mentioned earlier, the primary purpose of collecting this information is to enhance your experience with us. The collected data is used:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>For patient treatment and health care.</li>
            <li>For appointment scheduling and follow-up.</li>
            <li>For billing, payments, and insurance claims.</li>
            <li>To send medical reports and updates.</li>
            <li>For internal research and service improvement (where personal identification is not shared).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">How do We Protect Your Data?</h2>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>All data is stored on secure servers.</li>
            <li>Only authorised doctors and staff have access to information.</li>
            <li>Encryption is used for secure online records and transactions, including payments.</li>
            <li>Security measures are in accordance with the Indian IT Act 2000 and medical ethics.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8">Information Sharing & Disclosure</h2>
          <p>
            You can be assured that your personal and medical information will not be shared or disclosed to anyone. We will not share it with anyone, except in rare cases, which are outlined below.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>The doctors and medical staff involved in your treatment can access your personal and medical information, which is for your treatment.</li>
              <li>If an insurance company asks us for the data for a claim, we may share it with them.</li>
              <li>If there is a legal requirement, we must share the data with government authorities.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">Website Cookies and Third-Party Links</h2>
          <p>
            Our website may use cookies for a better user experience and online services (such as appointment booking). These are used only to improve website functionality and services.
          </p>
          <p>
            If our website provides links to other third-party websites, please note that Prince Hospital and its parent company, Prince Academy of Higher Education, are not responsible for the privacy policies of those websites. We strongly recommend that you read the privacy policies of any external websites before using them.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">Change in Privacy Policy</h2>
          <p>
            We update our privacy policy in a timely manner, and all changes are quickly updated on the website. 
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8">Suggestions and Questions Are Welcomed</h2>
          <p>
            If you have any questions or suggestions about this policy, kindly address and write this matter to our email.
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

export default PrivacyPolicy;
