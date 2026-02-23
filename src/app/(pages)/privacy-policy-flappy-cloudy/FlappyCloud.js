import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/images/logo.jpeg";

const FlappyCloudy = () => {
  return (
    <div className="min-h-screen bg-[#f8f0e6] py-8 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image 
          src={logo} 
          alt="Eraflip Logo" 
          className="h-32 w-auto object-contain"
          priority
          width={1024}
          height={665}
        />
      </div>

      {/* Content Container - With rounded corners and orange shadow */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg border border-orange-100 shadow-[0_0_20px_rgba(255,165,1,0.2)]">
        {/* Orange Heading */}
        <h1 className="text-3xl font-bold mb-4 text-orange-600">
          Privacy Policy - Flappy Cloudy
        </h1>
        
        {/* Last Updated */}
        <p className="text-gray-700 mb-6">
          <strong>Last Updated:</strong> August 13, 2025
        </p>

        {/* Content */}
        <div className="text-gray-800 space-y-4">
          <p>
            Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. We will NEVER sell your personal data to anyone.
          </p>

          <p>
            Flappy Cloudy enables users of its mobile game to be in control of their personal data. We also provide controls that allow users to manage their privacy choices regarding advertising preferences through consent dialogs. This Privacy Policy provides information about how Flappy Cloudy processes and protects this data in compliance with applicable regulations, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>

          <p>
            For the purpose of this Privacy Policy, personal data means any information relating to an identified or identifiable natural person (as defined by GDPR).
          </p>

          {/* Section Heading - Black */}
          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Responsibility for Processing Personal Data
          </h2>
          <p>
            Eraflip Tech is responsible for lawfully processing your data as carried out through the game Flappy Cloudy.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            What Kind of Data is Collected and for What Purpose?
          </h2>
          <p>
            When you use Flappy Cloudy, we integrate Google AdMob for showing ads. AdMob may collect certain information automatically, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Device Information:</strong> Device model, operating system, language, and app version.</li>
            <li><strong>Advertising ID:</strong> A resettable identifier provided by your device (e.g., Google Advertising ID).</li>
            <li><strong>IP Address & Location (approximate):</strong> For ad targeting and compliance purposes.</li>
          </ul>

          <p className="font-bold mt-4">
            Purpose of Collection:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To display ads (personalized or non-personalized, depending on your consent).</li>
            <li>To comply with legal obligations and ensure service functionality.</li>
          </ul>
          <p className="mt-2">
            The legal basis for this processing is your consent and our legitimate interest in operating and improving our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Third-Party Services (Ad Networks)
          </h2>
          <p>
            Our game uses Google AdMob for advertising. Google may collect and use data in accordance with their own privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy & Terms</a>.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Consent and Privacy Choices (GDPR & CCPA)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>GDPR (European Economic Area):</strong> Users will see a consent pop-up on first launch to choose personalized or non-personalized ads.</li>
            <li><strong>CCPA (California Residents):</strong> Users can opt-out of the "sale" of personal data through the same consent dialog.</li>
          </ul>
          <p className="mt-2">
            You can also manage ad personalization by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a>.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Cookies
          </h2>
          <p>
            Flappy Cloudy does not use cookies directly. However, AdMob may use cookies and similar technologies for ad delivery. Please review Google's policy on cookies.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Children's Privacy
          </h2>
          <p>
            Our game is not intended for children under 13 (or the minimum age in your region). We do not knowingly collect personal data from children.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Access and Disclosure to Third Parties
          </h2>
          <p>
            We do not share your personal data with any parties except as required to serve ads through Google AdMob.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Your Rights
          </h2>
          <p>
            Depending on your location, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Withdraw consent for personalized ads at any time.</li>
            <li>Reset your advertising ID in your device settings.</li>
            <li>Opt-out of personalized ads via Google settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a></li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Duration of Data Processing
          </h2>
          <p>
            Ad data is processed and stored by Google according to their policies. We do not store or control this data directly.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Revisions to this Privacy Policy
          </h2>
          <p>
            We may revise this Privacy Policy from time to time. Updates will be posted in the game and on our website. Continued use of the game means you accept the revised policy.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <div className="space-y-2 pl-4">
            <p><strong>Email:</strong> support@eraflip.com</p>
            <p><strong>Website:</strong> <a href="https://eraflip.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://eraflip.com</a></p>
            <p><strong>Phone:</strong> +92 309 7770073</p>
            <p><strong>Address:</strong> Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road, Lahore, 54000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlappyCloudy;