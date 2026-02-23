import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/images/logo.jpeg";

const SoundSimulator = () => {
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
          Privacy Policy – Real Gun Sound Simulator
        </h1>
        
        {/* Last Updated */}
        <p className="text-gray-700 mb-6">
          <strong>Last Updated:</strong> January 3, 2026
        </p>

        {/* Content */}
        <div className="text-gray-800 space-y-4">
          <p>
            Eraflip Tech built the Real Gun Sound Simulator game as a free game for Android devices. This SERVICE is provided by Eraflip Tech at no cost and is intended for use as is.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            About the Game
          </h2>
          <p>
            Real Gun Sound Simulator is an entertainment-based simulation game that allows users to experience realistic gun sound effects in a virtual environment. The game is designed purely for fun and does not involve real weapons or real-world actions.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Information Collection and Use
          </h2>
          <p>
            We do not collect, store, or share any personal data from users of Real Gun Sound Simulator.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>The game does not require user registration or accounts.</li>
            <li>The game does not collect device information, identifiers, or sensitive data.</li>
            <li>The game does not use advertising SDKs, analytics services, or tracking technologies.</li>
            <li>All gameplay takes place locally on the user's device.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Children's Privacy
          </h2>
          <p>
            Real Gun Sound Simulator is suitable for a general audience. As the game does not collect any personal information, users of all ages can use it safely.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Security
          </h2>
          <p>
            Since no personal data is collected or stored, there is no risk of personal data exposure. We still strive to provide a safe and stable experience for all users.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Users are encouraged to review this policy periodically.
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
            <p><strong>Address:</strong> Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road, Lahore, 54000, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundSimulator;