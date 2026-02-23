import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/images/logo.jpeg";

const JumpyTails = () => {
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
          Privacy Policy - Jumpy Tails
        </h1>
        
        {/* Last Updated */}
        <p className="text-gray-700 mb-6">
          <strong>Last Updated:</strong> November 28, 2025
        </p>

        {/* Content */}
        <div className="text-gray-800 space-y-4">
          <p>
            Your privacy is important to us, and we aim to be transparent about how we collect, use, and protect your information. We will never sell your personal data to anyone.
          </p>

          <p>
            Jumpy Tails allows users of its mobile game to stay in control of their personal data. This Privacy Policy explains how Jumpy Tails processes and protects information in compliance with applicable privacy regulations, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>

          <p>
            For the purpose of this Privacy Policy, personal data means any information relating to an identified or identifiable natural person (as defined under the GDPR).
          </p>

          {/* Section Heading - Black */}
          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Responsibility for Processing Personal Data
          </h2>
          <p>
            Eraflip Tech is responsible for ensuring that any data processed through Jumpy Tails is handled lawfully and transparently.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            What Data Is Collected and For What Purpose?
          </h2>
          <p>
            When you use Jumpy Tails, the game integrates Google AdMob to display advertisements. AdMob may automatically collect certain information, including:
          </p>

          <p className="font-bold mt-4">
            Data Collected Through AdMob
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Device Information:</strong> Model, operating system version, language, and app version.</li>
            <li><strong>Advertising ID:</strong> A resettable identifier provided by your device (e.g., Google Advertising ID).</li>
            <li><strong>Approximate Location & IP Address:</strong> Used for ad targeting, analytics, and compliance.</li>
          </ul>

          <p className="font-bold mt-4">
            Purpose of Collection
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To show ads (personalized or non-personalized based on your consent).</li>
            <li>To maintain ad delivery and comply with legal requirements.</li>
            <li>To support the game's functionality and improve the playing experience.</li>
          </ul>
          <p className="mt-2">
            The legal basis for this processing is your consent and our legitimate interest in operating and enhancing the game.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Third-Party Services (Ad Networks)
          </h2>
          <p>
            Jumpy Tails uses Google AdMob for advertising. Data collected by Google is handled according to Google's own privacy policies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy & Terms</a>.
          </p>
          <p>
            No other third-party SDKs, analytics tools, or tracking frameworks are used in Jumpy Tails.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Consent and Privacy Choices (GDPR & CCPA)
          </h2>
          <p className="font-bold">
            For GDPR Users (EEA):
          </p>
          <p>
            On first launch, users will see a consent dialog allowing them to choose between:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personalized ads</li>
            <li>Non-personalized ads</li>
          </ul>

          <p className="font-bold mt-4">
            For CCPA Users (California):
          </p>
          <p>
            You may opt out of the "sale" of personal information through the same consent dialog.
          </p>

          <p className="font-bold mt-4">
            Additional Controls
          </p>
          <p>
            You can modify ad personalization preferences anytime via:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Ads Settings on your device</li>
            <li>Resetting the Advertising ID in your device settings</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Cookies
          </h2>
          <p>
            Jumpy Tails does not use cookies directly. However, Google AdMob may use cookies and similar technologies for ad delivery, frequency capping, and measurement.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Children's Privacy
          </h2>
          <p>
            Jumpy Tails is suitable for players of all ages. However, we do not knowingly collect personal data from children under 13, and we rely on AdMob's policies to prevent personalized advertising for children.
          </p>
          <p>
            We fully comply with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>COPPA</li>
            <li>Relevant child data protection laws in your region</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Access and Disclosure to Third Parties
          </h2>
          <p>
            We do not share or sell your personal data to any parties. The only data processed is through Google AdMob, strictly for advertising purposes.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Withdraw consent for personalized ads</li>
            <li>Opt-out of targeted advertising</li>
            <li>Reset or limit your device's advertising ID</li>
            <li>Access privacy settings via Google Ads controls</li>
          </ul>
          <p className="mt-2">
            We do not store or control any AdMob data directly.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Data Retention
          </h2>
          <p>
            Ad-related data is stored and processed by Google according to their policies. Eraflip Tech does not store or manage any personal data from Jumpy Tails.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted within the game or on our website. Continued use of the game means you accept the updated policy.
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

export default JumpyTails;