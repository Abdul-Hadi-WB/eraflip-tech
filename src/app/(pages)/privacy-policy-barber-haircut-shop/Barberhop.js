'use client'
import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/images/logo.jpeg";

const BarberHaircutShop = () => {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image 
          src={logo} 
          alt="Eraflip Logo" 
          className="h-32 w-auto object-contain"
          priority
        />
      </div>

      {/* Content Container - With rounded corners and orange shadow */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg border border-orange-100 shadow-[0_0_20px_rgba(255,165,1,0.2)]">
        {/* Orange Heading */}
        <h1 className="text-3xl font-bold mb-4 text-orange-600">
          Privacy Policy – Barber Haircut Shop
        </h1>
        
        {/* Last Updated */}
        <p className="text-gray-700 mb-6">
          <strong>Last Updated:</strong> January 3, 2026
        </p>

        {/* Content */}
        <div className="text-gray-800 space-y-4">
          <p>
            Your privacy is important to us, and we are committed to being transparent about how information is handled in our game. We will never sell your personal data to anyone.
          </p>

          <p>
            Eraflip Tech built the Barber Haircut Shop Game as a free game for Android devices. This SERVICE is provided by Eraflip Tech at no cost and is intended for use as is.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Information Collection and Use
          </h2>
          <p>
            Barber Haircut Shop Game now integrates Google AdMob to display advertisements. While Eraflip Tech does not directly collect or store personal data, certain information may be collected automatically by AdMob.
          </p>

          <p className="font-bold mt-4">
            Data Collected Through AdMob
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Device Information:</strong> Device model, operating system, language, and app version</li>
            <li><strong>Advertising ID:</strong> A resettable identifier provided by your device</li>
            <li><strong>Approximate Location & IP Address:</strong> Used for ad delivery, relevance, and compliance</li>
          </ul>

          <p className="font-bold mt-4">
            Purpose of Collection
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Display ads (personalized or non-personalized depending on user settings)</li>
            <li>Maintain ad functionality and prevent misuse</li>
            <li>Support the free availability of the game</li>
          </ul>
          <p className="mt-2">
            Eraflip Tech does not have access to or control over the data collected by AdMob.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Third-Party Services
          </h2>
          <p>
            This game uses the following third-party service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google AdMob (for advertising)</li>
          </ul>
          <p className="mt-2">
            Google processes data in accordance with its own privacy policies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy & Terms</a>
          </p>
          <p>
            No analytics platforms or other tracking SDKs are used.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Children's Privacy
          </h2>
          <p>
            Barber Haircut Shop Game is suitable for users of all ages, including children. We do not knowingly collect personal information from children. Advertising shown through AdMob follows Google's policies, including restrictions on personalized ads for younger users where applicable. Parents can allow children to play the game with confidence.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Security
          </h2>
          <p>
            Eraflip Tech does not store or manage personal user data. All ad-related data processing is handled securely by Google in accordance with their standards. We remain committed to providing a safe and enjoyable gaming experience.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the game means acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, you can contact us:
          </p>
          <div className="space-y-2 pl-4">
            <p><strong>Email:</strong> support@eraflip.com</p>
            <p><strong>Website:</strong> <a href="https://eraflip.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://eraflip.com</a></p>
            <p><strong>Phone:</strong> +92 309 7770073</p>
            <p><strong>Address:</strong> Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road, Lahore, 54000, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberHaircutShop;