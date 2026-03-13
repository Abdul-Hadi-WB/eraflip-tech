'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import Link from "next/link";

// Simple particle system (future use if needed)
const Particles = () => {
  const particlesRef = useRef();
  const count = 1500;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const color = new THREE.Color();
      color.setHSL(0.65, 0.4, 0.4);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.x = time * 0.01;
      particlesRef.current.rotation.y = time * 0.005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });

  // Formspree endpoints - replace with your actual Formspree endpoints
  const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/your-form-id-here'; // Contact form endpoint
  const NEWSLETTER_ENDPOINT = 'https://formspree.io/f/your-newsletter-id-here'; // Newsletter endpoint (optional)

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Submitting...' }); // Yahan "Submitting" kiya hai

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        e.target.reset(); // Reset form on success
      } else {
        const data = await response.json();
        setFormStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    setNewsletterStatus({ type: 'loading', message: 'Submitting...' });

    const formData = new FormData();
    formData.append('email', newsletterEmail);
    formData.append('_subject', 'Newsletter Subscription - Eraflip Tech');

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT || CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setNewsletterStatus({ type: 'success', message: 'Successfully submitted!' });
        setNewsletterEmail('');
      } else {
        const data = await response.json();
        setNewsletterStatus({ type: 'error', message: data.error || 'Submitting failed. Please try again.' });
      }
    } catch (error) {
      setNewsletterStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    }
  };

  return (
    <section className="w-full bg-white pt-12 pb-12 sm:pt-20 sm:pb-20 lg:py-24 px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-full lg:max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
            Team Eraflip Tech is just a click away from you. Connect with us to get
            solutions to your business growth, market existence, and sustainability.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16">

          {/* LEFT SIDE - Contact Form */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
              Share your project idea with us
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                required
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
              />

              <select 
                name="category"
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-gray-500 text-sm sm:text-base appearance-none bg-white pr-12 sm:pr-14 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siPjxwYXRoIGQ9Ik03IDEwbDUgNSA1LTV6Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem] bg-[length:30px]"
              >
                <option value="">Select Category</option>
                <option value="Game Development">Game Development</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
              </select>

              <input 
                type="text" 
                name="budget"
                placeholder="Approx Budget" 
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
              />

              <textarea 
                name="message"
                placeholder="Project Details" 
                rows={4} 
                required
                className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 resize-none text-sm sm:text-base"
              ></textarea>

              {/* Hidden field for email notification */}
              <input type="hidden" name="_to" value="info@eraflip.com" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - Eraflip Tech" />
              <input type="hidden" name="_replyto" value="" />

              {formStatus.message && (
                <div className={`text-center p-3 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 
                  formStatus.type === 'error' ? 'bg-red-100 text-red-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition w-full text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.type === 'loading' ? 'Submitting...' : 'Submit Project'}  {/* Yahan 'Submitting...' kiya hai */}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - Newsletter */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
              Stay up to date on global innovations.
            </h3>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-black focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base"
              />
              <button 
                type="submit"
                disabled={newsletterStatus.type === 'loading'}
                className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition w-full sm:w-auto text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus.type === 'loading' ? 'Submitting...' : 'Sign Up'}
              </button>
            </form>

            {newsletterStatus.message && (
              <div className={`text-center p-3 rounded-lg mb-4 ${
                newsletterStatus.type === 'success' ? 'bg-green-100 text-green-700' : 
                newsletterStatus.type === 'error' ? 'bg-red-100 text-red-700' : 
                'bg-blue-100 text-blue-700'
              }`}>
                {newsletterStatus.message}
              </div>
            )}

            {/* IMAGE BELOW EMAIL */}
            <div className="w-full flex justify-center">
              <img
                src="/images/Eraflip-Countermesh.png"
                alt="Fantasy Characters"
                className="w-full max-w-sm sm:max-w-md object-contain mt-6 sm:mt-8 lg:mt-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;