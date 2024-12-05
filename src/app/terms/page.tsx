import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">Effective Date: December 5, 2024</p>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <p className="text-lg">Welcome to Antaryatri Meditation App!</p>
            <p>These Terms and Conditions govern your use of our app, which provides streaming meditation audio files. By downloading or using the app, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. License to Use</h2>
            <p>You are granted a limited, non-exclusive, non-transferable license to use the Antaryatri Meditation App for personal, non-commercial purposes. You may not copy, modify, or distribute any part of the app or its content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Sign-In and Subscription</h2>
            <ul className="list-disc pl-6">
              <li>Users may sign in via Google to access subscription-based features.</li>
              <li>The data collected during the sign-in process (name and email) is used strictly to track subscription dates and access.</li>
              <li>You are responsible for maintaining the confidentiality of your Google account credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Misuse the app or interfere with its services.</li>
              <li>Reverse-engineer or exploit the app in unauthorized ways.</li>
              <li>Use the app for any unlawful activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Content Ownership</h2>
            <p>All content, including audio files and other materials, is the exclusive property of Antaryatri. Unauthorized use or distribution is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
            <p>The Antaryatri App is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of the app, including service interruptions or loss of data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to the App</h2>
            <p>We may modify or discontinue any feature of the app at our discretion, without prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
            <p>These Terms are governed by the laws of Nepal. Any disputes will be resolved under Nepali jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Updates to Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. Continued use of the app after updates signifies your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
            <p>For questions about these Terms and Conditions, email us at <a href="mailto:support@antaryatri.com" className="text-blue-600 hover:text-blue-800 underline">support@antaryatri.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
