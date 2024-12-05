import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Effective Date: December 5, 2024</p>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <p className="text-lg">Welcome to Antaryatri Meditation App!</p>
            <p>Your privacy is important to us. This Privacy Policy explains how we handle the limited data we collect when you use our app, which provides streaming meditation audio files.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
            <p>We only collect the following information when you use the "Sign in with Google" feature:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Your email address and name (provided by Google during the sign-in process).</li>
            </ul>
            <p className="mt-4">This data is used solely to:</p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Track your subscription status and expiration dates for premium services.</li>
              <li>Verify your access to premium features.</li>
            </ol>
            <p className="mt-4">We do not collect, store, or share any other personal or identifiable data beyond what is stated above.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
            <ul className="list-disc pl-6">
              <li>Your data is used exclusively to manage your subscription.</li>
              <li>We do not use your information for marketing, analytics, or any other purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6">
              <li>The minimal data we collect is stored securely and is not shared with any third-party entities.</li>
              <li>We employ industry-standard security measures to protect your information from unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <p>While using the "Sign in with Google" feature, Google's privacy policy applies to the information they process. Please review their policy <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 underline">here</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children's Privacy</h2>
            <p>The Antaryatri App is not intended for users under the age of 13. If you are a parent or guardian and believe your child has signed in to the app, please contact us, and we will promptly delete their data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Updates will be reflected with a new effective date, and changes will take effect upon posting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>For questions about this Privacy Policy, email us at <a href="mailto:support@antaryatri.com" className="text-blue-600 hover:text-blue-800 underline">support@antaryatri.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;