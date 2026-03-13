'use client'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState, useTransform, animate, useRef , pageLoaded} from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

// Import images with proper paths (adjust according to your structure)
import logo1 from "../../../../public/images/logo1.png";
import logo2 from "../../../../public/images/logo2.png";
import logo3 from "../../../../public/images/logo3.png";
import logo4 from "../../../../public/images/logo4.png";
import logo5 from "../../../../public/images/logo5.png";
import logo6 from "../../../../public/images/logo6.png";
import logo7 from "../../../../public/images/logo7.png";
import logo8 from "../../../../public/images/logo8.png";

import group1 from "../../../../public/images/group1.png"
import group2 from "../../../../public/images/group2.png"
import group3 from "../../../../public/images/group3.jpg"
import group4 from "../../../../public/images/group4.png"
import group5 from "../../../../public/images/group5.png"
import group6 from "../../../../public/images/group6.jpg"
import group7 from "../../../../public/images/group7.png"
import group8 from "../../../../public/images/group8.png"
import group9 from "../../../../public/images/group9.png"
import group10 from "../../../../public/images/group10.webp"
import group11 from "../../../../public/images/group11.png"
import group12 from "../../../../public/images/group12.png"
import group13 from "../../../../public/images/group13.png"
import group14 from "../../../../public/images/group14.png"

import maincharac from "../../../../public/images/mainn.png";
import abouti from "../../../../public/images/abouti.png";
import birds1 from "../../../../public/images/birds1.png";
import fbird from "../../../../public/images/fbird.png";
import Drone1 from "../../../../public/images/Drone1.png";
import tDrone from "../../../../public/images/tDrone.png";





const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start counting when in view
            let start = 0;
            const end = value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [value]);
  
  return <span ref={ref}>{count}+</span>;
};






// Create clients array
const clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, InnovateTech ",
      company: "Global Solutions Inc.",
      text: "They didn't just connect our devices  they changed how we work. Manual processes became automated, confusing data became clear insights. For the first time, we're making decisions in real time that actually move our business forward. It's not just technology, it's a complete game-changer.",
      colorClass: "orange",
      initials: "AM"
    },
    {
      name: "David Kim",
      role: "Founder, TechFlow",
      company: "TechVision Corp",
      text: "Our platform now handles millions of users with absolute stability and speed. Eraflip engineered it right the first time  robust architecture, enterprise-grade security, and seamless scalability. Since launch, performance has been flawless. That's the kind of technical excellence every business hopes for but rarely finds.",
      colorClass: "blue",
      initials: "SJ"
    },
    {
      name: " Olivia Martinez",
      role: "Creative Director, Studio Nova",
      company: "InnovateLabs",
      text: "It's not easy to find a team that cares about design as much as they care about code. Eraflip brought both together beautifully. Every pixel had meaning, every interaction felt effortless, and the final result was everything we imagined. No compromises, No shortcuts. Just pure craftsmanship.",
      colorClass: "green",
      initials: "DC"
    },
    {
      name: " Thomas Weber",
      role: "Head of Engineering, FinTech Labs ",
      company: "Digital Solutions Ltd",
      text: "We needed deep backend expertise paired with a seamless user experience. Eraflip delivered both, flawlessly. Their technical depth impressed us, but their ability to simplify complex challenges truly set them apart. Humble, honest, and highly skilled. Just smart, reliable work from day one.",
      colorClass: "purple",
      initials: "ES"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  // Slide animation function
  const slideTo = useCallback((newIndex, slideDirection) => {
    if (isAnimating) return;
    
    setDirection(slideDirection);
    setIsAnimating(true);
    
    // Start animation and update index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 600); // Animation duration
  }, [isAnimating]);

  // Next slide
  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    slideTo(newIndex, 'next');
  }, [currentIndex, testimonials.length, slideTo]);

  // Previous slide
  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    slideTo(newIndex, 'prev');
  }, [currentIndex, testimonials.length, slideTo]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Function to get color classes
  const getColorClasses = (color) => {
    switch(color) {
      case 'orange':
        return {
          border: 'border-orange-500',
          gradientFrom: 'from-orange-50',
          gradientTo: 'to-orange-100',
          borderAvatar: 'border-orange-200',
          text: 'text-orange-600'
        };
      case 'blue':
        return {
          border: 'border-blue-500',
          gradientFrom: 'from-blue-50',
          gradientTo: 'to-blue-100',
          borderAvatar: 'border-blue-200',
          text: 'text-blue-600'
        };
      case 'green':
        return {
          border: 'border-green-500',
          gradientFrom: 'from-green-50',
          gradientTo: 'to-green-100',
          borderAvatar: 'border-green-200',
          text: 'text-green-600'
        };
      case 'purple':
        return {
          border: 'border-purple-500',
          gradientFrom: 'from-purple-50',
          gradientTo: 'to-purple-100',
          borderAvatar: 'border-purple-200',
          text: 'text-purple-600'
        };
      default:
        return {
          border: 'border-orange-500',
          gradientFrom: 'from-orange-50',
          gradientTo: 'to-orange-100',
          borderAvatar: 'border-orange-200',
          text: 'text-orange-600'
        };
    }
  };

  // Get colors for current testimonial
  const colors = getColorClasses(testimonials[currentIndex].colorClass);

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-[500px] md:h-[450px] flex items-center justify-center mb-5">
        
        {/* SLIDE CONTAINER with SMOOTH TRANSITION */}
        <div 
          key={currentIndex} // 🔑 This is CRITICAL for smooth animation
          className={`absolute w-full max-w-3xl transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isAnimating
              ? direction === 'next'
                ? '-translate-x-full opacity-0'   // Slide out to LEFT
                : 'translate-x-full opacity-0'    // Slide out to RIGHT
              : 'translate-x-0 opacity-100'       // Center position
          }`}
        >
          <div className={`bg-white border-l-4 ${colors.border} rounded-xl p-8 shadow-2xl mx-4`}>
            <div className="flex items-start gap-6">
              {/* Client Avatar */}
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} rounded-full flex items-center justify-center border-2 ${colors.borderAvatar} flex-shrink-0`}>
                <span className={`text-xl font-bold ${colors.text}`}>
                  {testimonials[currentIndex].initials}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-orange-400 fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Navigation Overlay (invisible buttons) */}
        <div className="absolute inset-0 z-30 flex">
          <button
            onClick={prevSlide}
            className="flex-1 cursor-pointer hover:bg-gray-50/10 transition-colors"
            aria-label="Previous testimonial"
          />
          <button
            onClick={nextSlide}
            className="flex-1 cursor-pointer hover:bg-gray-50/10 transition-colors"
            aria-label="Next testimonial"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index === currentIndex) return;
              const dir = index > currentIndex ? 'next' : 'prev';
              slideTo(index, dir);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 max-w-md mx-auto">
        <div className="text-center text-sm text-gray-500 mb-2">
          Review {currentIndex + 1} of {testimonials.length}
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-1000 ease-out"
            style={{ 
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Click anywhere on left/right side to navigate • Auto-slides every 5 seconds
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Or use ← → arrow keys on keyboard
        </p>
      </div>
    </div>
  );
}

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simple loading state
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
{/* Section 1 - ONLY SLIDE ANIMATIONS */}
<section className="relative min-h-screen mt-15 bg-white overflow-hidden
                   py-12 sm:py-16 md:py-20 lg:py-20 2xl:py-24
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                   mb-[-110px] sm:mb-[-130px] md:mb-[-150px] lg:mb-[-160px] xl:mb-[-180px] 2xl:mb-[-210px]">
  
  {/* CONTAINER — ab 2XL aur 3XL pe aur bada, taake image ko space mile */}
  <div className="max-w-[1400px] 2xl:max-w-[2000px] 3xl:max-w-[2400px] mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center 
                  gap-6 lg:gap-8 xl:gap-10 2xl:gap-14">
    
    {/* LEFT CONTENT — bilkul original, kuch nahi badla */}
    <div className="w-full lg:w-1/2 flex flex-col lg:items-start 
                px-4 sm:px-6 md:px-8 lg:px-0 
                lg:pr-6 xl:pr-8 2xl:pr-12 
                -mt-10 sm:-mt-16 md:-mt-18 lg:-mt-28 xl:-mt-32 2xl:-mt-40
                lg:ml-8 xl:ml-12 2xl:ml-20"
    >
      {/* MAIN HEADING — original */}
      <h1 className="mt-12 sm:mt-10 md:mt-10 lg:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-gray-900">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="block"
        >
          Empowering
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="block text-orange-500 mt-1"
        >
          Creativity
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-700 mt-3 sm:mt-4"
        >
          Through Smart Solutions
        </motion.span>
      </h1>

      {/* LINE — original */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-20 sm:w-22 md:w-24 2xl:w-32 h-1 sm:h-1.5 2xl:h-2 bg-orange-500 rounded-full mt-4 sm:mt-5 md:mt-6 2xl:mt-8"
      ></motion.div>

      {/* DESCRIPTION — original */}
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="text-base sm:text-md md:text-lg 2xl:text-xl text-gray-600 mt-4 sm:mt-5 md:mt-6 2xl:mt-8 text-justify max-w-sm sm:max-w-md md:max-w-lg 2xl:max-w-xl leading-relaxed"
      >
       We are a global multi-service studio transforming bold ideas into powerful platforms, seamless digital solutions, and stunning games for all platforms worldwide.Bringing ideas to life with innovation, artistry, and technical excellence.
      </motion.p>

      {/* CTA BUTTONS — original */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="flex gap-3 sm:gap-4 2xl:gap-6 mt-6 sm:mt-7 md:mt-8 2xl:mt-10"
      >
        <a href='contact-us'>
          <button className="px-6 sm:px-7 md:px-8 2xl:px-10 py-2.5 sm:py-3 md:py-3.5 2xl:py-4 
                           bg-orange-500 text-white font-semibold rounded-lg 
                           hover:bg-orange-600 transition-all duration-300 
                           hover:-translate-y-0.5 shadow-lg hover:shadow-xl 
                           text-sm sm:text-base 2xl:text-lg">
            Get Started.
          </button>
        </a>
      </motion.div>
    </div>

    {/* RIGHT IMAGE — ab thoda chhota */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-start 
               px-4 sm:px-6 md:px-8 lg:px-0 
               lg:pl-6 xl:pl-8 2xl:pl-12">
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl 2xl:max-w-3xl 2xl:w-[600px] 2xl:max-w-full"
  >
    <Image
      src={maincharac}
      alt="Gaming Warrior"
      width={750}
      height={550}
      quality={85}
      className="w-full h-auto drop-shadow-xl rounded-xl sm:rounded-2xl"
      priority
    />
  </motion.div>
</div>
  </div>
</section>


{/* Section 2 */}
<section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white w-full">
  {/* Main Container */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
    {/* Header - Space Reduced */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4 w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 sm:mb-3 md:mb-4 leading-tight text-gray-900 w-full"
      >
        <span className="block">Power UP</span>
        <span className="block text-orange-500 mt-1 sm:mt-2">YOUR GROWTH</span>
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-blue-600 mx-auto rounded-full shadow-lg w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
      />
    </motion.div>

    {/* Content Grid - PERFECT ALIGNMENT */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch px-4 sm:px-6 lg:px-8 w-full">
      {/* LEFT - Image Container (Same Height as Right Content) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] flex items-center justify-center w-full"
      >
      {/* Image fits inside container without cropping — thora left, bari screens par aur left */}
<div className="relative w-full h-full flex items-center justify-center">
  <div className="relative w-full h-full mr-4 sm:mr-6 lg:mr-8 xl:mr-12 2xl:mr-28 3xl:mr-36">
    <Image
      src={abouti}
      alt="Run Character"
      fill
      className="object-contain rounded-lg"
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</div>
      </motion.div>

      {/* RIGHT - Content with Same Height — thora left shift */}
<div className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 w-full 
                -translate-x-2 sm:-translate-x-3 lg:-translate-x-4 xl:-translate-x-8 2xl:-translate-x-16 3xl:-translate-x-24">
  
<motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight w-full"
>
    <span className="text-gray-800">We Combine </span>
    <span className="relative inline-block">
        <span className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent font-black">
            Creative
        </span>
    </span>{" "}
    <span className="relative inline-block">
        <span className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent font-black">
            Vision
        </span>
       
    </span>{" "}
    <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
        With Technical Expertise
    </span>
</motion.h2>

  {/* Stats Boxes — bilkul original */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4">
    {[
      { number: 250, label: "Projects Completed", gradient: "from-orange-600 to-orange-800" },
      { number: 50, label: "Global Clients", gradient: "from-blue-700 to-blue-900" },
      { number: 80, label: "Professional Members", gradient: "from-amber-600 to-orange-700" },
    ].map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + idx * 0.1 }}
        whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
        className="relative group"
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl p-4 sm:p-5 text-center shadow-xl`}>
          <p className="text-xl sm:text-2xl font-black text-white mb-1">
            <AnimatedCounter value={stat.number} />
          </p>
          <p className="text-white/90 font-medium text-xs sm:text-sm uppercase tracking-wider">
            {stat.label}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </div>
    
    
  </div>
</section>

{/* Section 3 */}
<section className="w-full flex justify-center py-8 sm:py-12 md:py-16 lg:py-20 bg-white font-[Montserrat,sans-serif] relative overflow-hidden">
  
  {/* Background Decorative Elements */}
  <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  
  <div className="relative w-[95%] sm:w-[92%] md:w-[90%] lg:w-[90%] max-w-6xl">

    {/* 🔥 STICKER – OUTSIDE BOX */}
    <div className="absolute -top-16 sm:-top-20 md:-top-30 lg:-top-40 xl:-top-50 -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-18 z-20 hover:rotate-12 transition-transform duration-300 cursor-pointer">
      <img
        src="/images/BRYETPeTACkgcPaaTFFAedWYE0Q.png"
        alt="Sticker"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 drop-shadow-2xl"
      />
    </div>

     {/* MAIN BOX */}
    <div
      className="relative px-6 sm:px-10 md:px-12 lg:px-14 py-10 sm:py-12 md:py-14 lg:py-16 text-white
                 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1da1f2] 
                 shadow-2xl hover:shadow-3xl transition-all duration-500"
      style={{
        clipPath: "polygon(0% 0%, 88% 0%, 100% 22%, 100% 100%, 0% 100%)",
        borderRadius: "42px 0 0 42px",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        boxShadow: "0 30px 40px -15px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(255,255,255,0.2)"
      }}
    >    
     {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/30 rounded-tl-[60px]"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/30 rounded-br-[60px]"></div>

      {/* CONTENT */}
      <div className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
        
        {/* Heading with improved typography */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Drive Growth With
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              Smart Technology
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-white rounded-full"></span>
          </span>
        </h2>

        {/* Paragraph with improved readability */}
        <div className="relative">
          <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed drop-shadow-md">
            Eraflip delivers enterprise-ready IT solutions across Game Development, Web Development, Odoo, Digital Marketing, SEO, Content Creation, UI/UX Design, and IoT. We drive growth with scalable systems, optimize efficiency through intelligent automation, and empower your business with cutting-edge innovation. From immersive games to data-driven campaigns, every solution is purpose-built to deliver measurable business outcomes. 
            <span className="block mt-3 font-semibold text-white">
              Practical, reliable, and engineered for the long run.
            </span>
          </p>
          
          {/* Decorative quote mark */}
          <span className="absolute -top-4 -left-2 text-6xl text-white/10 font-serif">"</span>
        </div>
        
        
      </div>
    </div>
  </div>

  
</section>





{/* Section 4 - Services - Updated Grid Layout */}
<section className="relative py-6 sm:py-8 md:py-10 lg:py-18 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
  {/* Background Pattern */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-gray-100/80"></div>
    
    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(59 130 246)" strokeWidth="0.5"/>
            <circle cx="30" cy="30" r="1" fill="rgb(249 115 22)" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10">
    {/* Header Section */}
    <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-2"
      >
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          Solutions 
          <span className="block mt-1 sm:mt-2 md:mt-3">
            <span className="text-orange-500">
              That Deliver
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          From game development to web solutions, digital marketing, and beyond. Every project crafted for performance and built to last.
        </p>
      </motion.div>
    </div>

    {/* ALL 6 BOXES IN ONE GRID - FIXED FOR IPAD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
      
      {/* Game Development - Orange Theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-orange-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-100/50 group-hover:border-orange-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-orange-50/15 to-amber-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-orange-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center group-hover:from-orange-600 group-hover:to-amber-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">🎮</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
              Game Development
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
          End-to-end game development services across mobile, PC, and console. Using Unity and Unreal Engine, we build all genrea games designed to engage players, perform flawlessly, and scale with your vision.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["Game Development", "3D Modeling", "Version Control", "Performance Tools"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-orange-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:bg-orange-500 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Web Development - Blue Theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-blue-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:border-blue-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-cyan-50/15 to-cyan-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">🌐</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
              Web Development
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
             Building high-performance websites and web applications that are fast, scalable, and built to convert. Modern frameworks, clean code, and seamless user experiences  every time.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["Frontend Frameworks", "Backend Frameworks", "Visual Aesthetics ", "Deployment"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-blue-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Digital Marketing - EMERALD Theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-emerald-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-100/50 group-hover:border-emerald-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-teal-50/15 to-teal-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-emerald-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">📈</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-emerald-700 transition-colors duration-400">
              Digital Marketing
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
             Data-driven strategies that put your brand in front of the right audience. From SEO to social media, we create campaigns that engage, convert, and deliver measurable ROI.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["Analytics", " SEO", "Social-Media", "Email-Marketing"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-emerald-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:bg-emerald-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* IoT Solutions - PURPLE Theme (4th box) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-violet-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-violet-100/50 group-hover:border-violet-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-100/20 via-purple-50/15 to-purple-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-violet-200/30 to-purple-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-50 to-white border border-violet-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-violet-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-violet-500 to-purple-400 flex items-center justify-center group-hover:from-violet-600 group-hover:to-purple-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">📡</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-violet-700 transition-colors duration-400">
              IoT Solutions
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
              Seamlessly connecting devices, systems, and data to enable smarter automation and real-time intelligence.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["IOT Platforms", "Hardware", "Protocols", "Data Visualization"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-violet-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-violet-500 group-hover/item:bg-violet-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-violet-500 to-purple-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-violet-600 hover:to-purple-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content Creation - ORANGE Theme (5th box) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-orange-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-100/50 group-hover:border-orange-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-amber-50/15 to-amber-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-orange-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center group-hover:from-orange-600 group-hover:to-amber-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">🎥</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
              Content Creation
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
              Compelling stories that capture attention and build emotional connections. From video production to brand storytelling, we create content that resonates and inspires action.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["Video Editing", "Graphic Designing", "Motion Graphics", "AI Content"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-orange-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:bg-orange-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* UI/UX Design - BLUE Theme (6th box) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-blue-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:border-blue-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
          
          {/* Light Spread Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-cyan-50/15 to-cyan-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250"></div>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            {/* Service Icon */}
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-300 transition-all duration-400 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-400">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-400">🎨</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
              UI/UX Design
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
              Designed for the way people actually feel and interact. Intuitive flows, stunning visuals, and experiences that build lasting connections between brand and user.
            </p>

            {/* Features List */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex-grow mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <div className="space-y-2 sm:space-y-3">
                {["Design & Prototyping", "Collaboration", "User Testing", "Design System"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-blue-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 text-center"
    >
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 bg-gradient-to-r from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-400 max-w-3xl mx-auto">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 hover:text-gray-800 transition-colors duration-400">
           What Can We Build for You?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 hover:text-gray-700 transition-colors duration-400">
          Get innovative, high-performance tech solutions tailored to your needs.
          </p>
        </div>
        <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:from-gray-900 hover:to-gray-800 hover:scale-105 transition-all duration-400 whitespace-nowrap">
          Contact Our Team
        </button>
      </div>
    </motion.div>
  </div>
</section>



{/* Section 5 – WHY CHOOSE US (Clean Boxes Layout) */}
<section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-26 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 bg-white relative overflow-visible font-[Montserrat,sans-serif]">
  {/* ===== DELICATE BLUE & GREEN LINES ===== */}
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <svg
      className="absolute -bottom-4 sm:-bottom-6 -left-2 w-[calc(100%+8px)] h-[65%] sm:h-[70%] md:h-[75%]"
      viewBox="0 0 1445 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Delicate blue line */}
      <path
        d="M-15 400 
           C240 300, 390 460, 590 330 
           C790 200, 940 410, 1140 280 
           C1340 150, 1455 340, 1455 400"
        stroke="rgba(30,64,175,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Delicate green line */}
      <path
        d="M-5 430 
           C250 330, 400 490, 600 360 
           C800 230, 950 440, 1150 310 
           C1350 180, 1465 370, 1465 430"
        stroke="rgba(204, 112, 0, 0.2)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>

  
{/* Corrected fbird Image */}
<div className="absolute top-0 left-0 z-20 overflow-visible hidden sm:block">
  <img 
    src="/images/fbird.png" 
    alt="Fbird Sticker" 
    className="drop-shadow-2xl object-contain left-0"
    style={{ 
      width: 'clamp(110px, 30vw, 310px)',
      height: 'auto',
      transform: 'translate(clamp(-35px, -5vw, -195px), clamp(-100px, -15vw, -340px)) translateY(106px)',
      display: 'block'
    }}
  />
</div>


  
  <div className="max-w-7xl mx-auto relative z-10">


    {/* Section Heading with Lines */}
    <div className="relative z-30 flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-14 mt-8 sm:mt-10 md:mt-12">
      {/* Left Line */}
      <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center px-2">
        WHY <span className="text-orange-500">CHOOSE US</span>
      </h2>

      {/* Right Line */}
      <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>
    </div>

    {/* Value Boxes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14">

      {[
        {
          title: "Full-Stack Capabilities",
          desc: "We build across every layer of technology  from intuitive frontends to robust backends, databases, APIs, and everything in between. One team, seamless execution.",
          hoverColor: "orange",
        },
        {
          title: "Effective Communication",
          desc: "Clear, transparent communication that keeps everyone aligned  ensuring smooth collaboration and faster delivery. No jargon, no delays, just honest conversations.",
          hoverColor: "blue",
        },
        {
          title: "Focus On Quality",
          desc: "Every line of code, every pixel, every detail is crafted with intention, tested with precision, and refined until it's exactly what you deserve.",
          hoverColor: "green",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`
            rounded-xl sm:rounded-2xl md:rounded-[28px]
            p-4 sm:p-5 md:p-6 lg:p-8
            border ${
              item.hoverColor === 'orange' 
                ? 'border-orange-200' 
                : item.hoverColor === 'blue'
                ? 'border-blue-200'
                : 'border-green-200'
            }
            shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            transition-all duration-500 ease-out
            hover:-translate-y-1 sm:hover:-translate-y-2
            group relative overflow-hidden
            ${
              item.hoverColor === 'orange' 
                ? 'hover:shadow-[0_12px_40px_rgba(249,115,22,0.1)] sm:hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)] hover:border hover:border-orange-300' 
                : item.hoverColor === 'blue'
                ? 'hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] sm:hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border hover:border-blue-300'
                : 'hover:shadow-[0_12px_40px_rgba(34,197,94,0.1)] sm:hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)] hover:border hover:border-green-300'
            }
          `}
        >
          {/* Pre-Hover Gradient */}
          <div 
            className={`
              absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[28px] -z-10
              transition-all duration-700 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-br from-orange-100/60 via-white to-orange-50/40'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-br from-blue-100/60 via-white to-blue-50/40'
                  : 'bg-gradient-to-br from-green-100/60 via-white to-green-50/40'
              }
            `}
          ></div>
          
          {/* Hover Gradient Overlay */}
          <div 
            className={`
              absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[28px] -z-5
              opacity-0 group-hover:opacity-100
              transition-all duration-700 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-br from-orange-200/50 via-white to-orange-100/40'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-br from-blue-200/50 via-white to-blue-100/40'
                  : 'bg-gradient-to-br from-green-200/50 via-white to-green-100/40'
              }
            `}
          ></div>

          {/* Corner Accent - Pre-Hover */}
          <div 
            className={`
              absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 -z-5
              transition-all duration-800 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-bl from-orange-200/50 via-orange-100/20 to-transparent'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-bl from-blue-200/50 via-blue-100/20 to-transparent'
                  : 'bg-gradient-to-bl from-green-200/50 via-green-100/20 to-transparent'
              }
            `}
          ></div>

          {/* Enhanced Corner on Hover */}
          <div 
            className={`
              absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 -z-5
              opacity-0 group-hover:opacity-100
              transition-all duration-800 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-bl from-orange-300/60 via-orange-200/30 to-transparent'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-bl from-blue-300/60 via-blue-200/30 to-transparent'
                  : 'bg-gradient-to-bl from-green-300/60 via-green-200/30 to-transparent'
              }
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            `}
          ></div>

          {/* Bottom Gradient - Pre-Hover */}
          <div 
            className={`
              absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 -z-5
              transition-all duration-800 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-t from-orange-100/40 via-orange-50/25 to-transparent'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-t from-blue-100/40 via-blue-50/25 to-transparent'
                  : 'bg-gradient-to-t from-green-100/40 via-green-50/25 to-transparent'
              }
            `}
          ></div>

          {/* Enhanced Bottom on Hover */}
          <div 
            className={`
              absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-28 -z-5
              opacity-0 group-hover:opacity-100
              transition-all duration-800 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-t from-orange-200/50 via-orange-100/30 to-transparent'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-t from-blue-200/50 via-blue-100/30 to-transparent'
                  : 'bg-gradient-to-t from-green-200/50 via-green-100/30 to-transparent'
              }
            `}
          ></div>

          {/* Fixed: Border Tint without negative inset */}
          <div 
            className={`
              absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[28px] -z-20
              border ${
                item.hoverColor === 'orange'
                  ? 'border-orange-200/30'
                  : item.hoverColor === 'blue'
                  ? 'border-blue-200/30'
                  : 'border-green-600/80'
              }
              transition-all duration-700 ease-out
              group-hover:border-2
              ${
                item.hoverColor === 'orange'
                  ? 'group-hover:border-orange-300/50'
                  : item.hoverColor === 'blue'
                  ? 'group-hover:border-blue-300/50'
                  : 'group-hover:border-green-300/50'
              }
            `}
          ></div>

          {/* Fixed: Border Glow without negative inset */}
          <div 
            className={`
              absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[28px] -z-20
              opacity-0 group-hover:opacity-100
              transition-all duration-700 ease-out
              box-shadow ${
                item.hoverColor === 'orange'
                  ? '[0_0_0_1px_rgba(249,115,22,0.3)]'
                  : item.hoverColor === 'blue'
                  ? '[0_0_0_1px_rgba(59,130,246,0.3)]'
                  : '[0_0_0_1px_rgba(34,197,94,0.3)]'
              }
            `}
          ></div>

          {/* Accent Line */}
          <div 
            className={`
              relative w-12 sm:w-14 h-1.5 sm:h-2 rounded-full mb-3 sm:mb-4 md:mb-5 overflow-hidden
              transition-all duration-500 ease-out
              group-hover:w-14 sm:group-hover:w-16 group-hover:h-1.5 sm:group-hover:h-2.5
            `}
          >
            <div 
              className={`
                absolute inset-0
                bg-gradient-to-r
                ${
                  item.hoverColor === 'orange'
                    ? 'from-orange-400 via-orange-500 to-orange-600 group-hover:from-orange-500 group-hover:via-orange-600 group-hover:to-orange-700'
                    : item.hoverColor === 'blue'
                    ? 'from-blue-400 via-blue-500 to-blue-600 group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700'
                    : 'from-green-400 via-green-500 to-green-600 group-hover:from-green-500 group-hover:via-green-600 group-hover:to-green-700'
                }
                transition-all duration-500
              `}
            ></div>
          </div>

          <h3 
            className={`
              text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3
              transition-colors duration-400
              ${
                item.hoverColor === 'orange'
                  ? 'text-gray-900 group-hover:text-orange-700'
                  : item.hoverColor === 'blue'
                  ? 'text-gray-900 group-hover:text-blue-700'
                  : 'text-gray-900 group-hover:text-green-700'
              }
            `}
          >
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-400">
            {item.desc}
          </p>

          {/* Subtle Hover Overlay */}
          <div 
            className={`
              absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[28px] -z-5
              opacity-0 group-hover:opacity-100
              transition-all duration-700 ease-out
              ${
                item.hoverColor === 'orange'
                  ? 'bg-gradient-to-tr from-orange-200/30 via-orange-100/15 to-transparent'
                  : item.hoverColor === 'blue'
                  ? 'bg-gradient-to-tr from-blue-200/30 via-blue-100/15 to-transparent'
                  : 'bg-gradient-to-tr from-green-200/30 via-green-100/15 to-transparent'
              }
            `}
          ></div>
        </div>
      ))}

    </div>
  </div>
</section>






{/* Section 6 - Clients */}
<section className="w-full py-12 md:py-16 lg:py-20 relative bg-white select-none">

  {/* Bird Sticker */}
  <div className="absolute -top-3 md:-top-4 lg:-top-15 right-2 md:right-3 lg:right-4 w-40 h-40 md:w-60 md:h-60 lg:w-81 lg:h-81 z-10 hidden lg:block">
    <Image
      src={birds1}
      alt="Bird Decorative"
      width={326}
      height={326}
      className="object-contain opacity-100"
      priority
    />
  </div>

  <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-8">

    {/* Header */}
    <div className="text-center mb-8 md:mb-12 lg:mb-16">
      <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-3 lg:mb-4">
        {/* Left Line */}
        <div className="w-8 md:w-10 h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 text-center">
          Our Valued <span className="text-orange-500">Clients</span>
        </h2>

        {/* Right Line */}
        <div className="w-8 md:w-10 h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>
      </div>

      <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base px-2 md:px-0">
        Brands we've grown with  from bold startups to industry leaders.
      </p>
    </div>

    {/* Auto-moving marquee only - Correct seamless loop */}
    <div className="flex overflow-visible">
      <motion.div
        className="flex items-center gap-4 md:gap-8 lg:gap-14"
        animate={{ 
          x: ["0%", "-50%"]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 45, 
          ease: 'linear',
          repeatType: "loop"
        }}
        style={{ 
          width: "max-content" 
        }}
      >
        {/* Three sets - यह correct technique है */}
        {[...Array(3)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {clients.map((logo, index) => (
              <div key={`client-${setIndex}-${index}`} className="group relative flex-shrink-0">
                {/* Logo Card */}
                <div className="relative w-28 h-12 md:w-36 md:h-16 lg:w-46 lg:h-24 flex items-center justify-center rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 
                                bg-orange-50 border border-orange-200 transition-all duration-500 
                                hover:scale-105 hover:shadow-lg">
                  
                  {/* Background stays light for logo readability */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-orange-50 opacity-100"></div>

                  {/* Subtle shadow on hover */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 shadow-lg transition-opacity duration-500"></div>

                  {/* Logo */}
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    width={110}
                    height={44}
                    className="relative z-10 object-contain opacity-100 contrast-125 saturate-125 transition-transform duration-500 group-hover:scale-105 w-auto h-8 md:h-9 lg:h-11"
                  />
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>

    {/* Clean Compact Stats Section - Compact Version */}
    <div className="mt-6 md:mt-8 lg:mt-12 flex justify-center px-2 md:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-5 w-full max-w-2xl">
        {[
          { number: 250, label: "Projects Completed", color: "orange" },
          { number: 50, label: "Global Clients", color: "blue" },
          { number: 80, label: "Professional Members", color: "green" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-3 md:p-4 bg-white rounded-xl md:rounded-2xl
                       shadow-[0_4px_12px_-3px_rgba(0,0,0,0.1),0_3px_6px_-2px_rgba(0,0,0,0.06)]
                       md:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1),0_6px_12px_-4px_rgba(0,0,0,0.06)]
                       hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:scale-[1.01]
                       transition-all duration-300 ease-out group cursor-pointer
                       ${stat.color === 'orange' 
                         ? 'border border-orange-200 hover:border-orange-400' 
                         : stat.color === 'blue'
                           ? 'border border-blue-200 hover:border-blue-400'
                           : 'border border-green-200 hover:border-green-400'}`}
          >
            {/* Colored Circle Background for Numbers - Made smaller */}
            <div className={`
              relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2
              rounded-full ${stat.color === 'orange' 
                ? 'bg-orange-50 group-hover:bg-orange-100' 
                : stat.color === 'blue'
                  ? 'bg-blue-50 group-hover:bg-blue-100'
                  : 'bg-green-50 group-hover:bg-green-100'} 
              transition-colors duration-300
            `}>
              {/* Animated Number - Smaller */}
              <p className={`
                text-lg md:text-xl lg:text-2xl font-bold ${stat.color === 'orange' 
                  ? 'text-orange-600 group-hover:text-orange-700' 
                  : stat.color === 'blue'
                    ? 'text-blue-600 group-hover:text-blue-700'
                    : 'text-green-600 group-hover:text-green-700'}
                transition-colors duration-300
                leading-none
              `}>
                <AnimatedCounter value={stat.number} />
              </p>
            </div>
            
            {/* Label - Smaller */}
            <p className="text-gray-800 text-xs md:text-sm font-semibold text-center">
              {stat.label}
            </p>
            
            {/* Subtle colored dot below label */}
            <div className={`
              mt-1 w-1 h-1 rounded-full ${stat.color === 'orange' 
                ? 'bg-orange-500' 
                : stat.color === 'blue'
                  ? 'bg-blue-500'
                  : 'bg-green-500'} 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
            `}></div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


{/* Section 7 Combined Section - Testimonials + Technologies with side images */}
<section className="relative bg-white py-8 sm:py-10 lg:py-16 xl:py-20 overflow-hidden md:overflow-visible">

 {/* drone1 Image - Responsive positioning */}
<img
  src="/images/Drone1.png"
  alt="Drone"
  className="absolute hidden sm:block sm:top-[-24px] sm:left-2 md:top-[-14px] md:left-6 lg:top-[0px] lg:left-12 xl:left-18
           w-34 sm:w-38 md:w-42 lg:w-46 xl:w-50 h-auto z-0 pointer-events-none drop-shadow-lg object-contain -rotate-[10deg]"
/>

 {/* Drone Image - Responsive positioning */}
  <img
    src="/images/tDrone.png"
    alt="Drone"
    className="absolute hidden sm:block sm:-translate-y-[40%] sm:top-2/4 sm:right-6 
             md:-translate-y-[50%] md:top-3/5 md:right-8 
             lg:-translate-y-[60%] lg:top-3/5 lg:right-10 
             w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto z-0 pointer-events-none drop-shadow-lg object-contain rotate-[10deg]"
  />

  {/* Mobile-only decorative elements */}
  <div className="sm:hidden absolute top-4 left-4 w-16 h-16 opacity-50">
    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-transparent rounded-full"></div>
  </div>
  
  <div className="sm:hidden absolute bottom-20 right-4 w-14 h-14 opacity-40">
    <div className="w-full h-full bg-gradient-to-tl from-orange-50 to-transparent rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

    {/* Section Header - Testimonials */}
    <div className="text-center mb-[-20px] sm:mb-[-15px] pt-4 sm:pt-0">
      <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-3 lg:mb-4">
        {/* Left Line */}
        <div className="w-6 sm:w-8 lg:w-10 h-0.5 sm:h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center px-2">
          From Our<span className="text-orange-500">Clients</span>
        </h2>

        {/* Right Line */}
        <div className="w-6 sm:w-8 lg:w-10 h-0.5 sm:h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>
      </div>

      <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base lg:text-base">Kind words from teams we've built alongside.</p>
    </div>

    {/* Testimonial Carousel */}
    <div className="px-0 sm:px-4">
      <TestimonialCarousel />
    </div>

    {/* Spacer between sections - Responsive */}
    <div className="my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28"></div>

    {/* Technologies Section */}
    <div className="relative">
      {/* Technologies decorative image - Responsive */}
      <img
        src="/images/BRYETPeTACkgcPaaTFFAedWYE0Q.png"
        alt="Decorative"
        className="absolute hidden sm:block sm:-top-24 sm:-left-4 
                 md:-top-32 md:-left-5 
                 lg:-top-40 lg:-left-5 
                 w-50 h-50 sm:w-54 sm:h-54 md:w-58 md:h-58 lg:w-62 lg:h-62  z-0 pointer-events-none"
      />

      {/* Section Header - Technologies */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-6 sm:w-8 lg:w-10 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center px-2">
            Our <span className="text-orange-500">Expertise</span>
          </h2>

          <div className="w-6 sm:w-8 lg:w-10 h-0.5 sm:h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>

        <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-base px-2">
        We combine modern tools with proven technologies to deliver consistent, real-world results. It's the standard we have set for ourselves  and the promise we keep for our clients.
        </p>
      </div>

      {/* Auto-moving Technologies - Fixed seamless infinite loop */}
      <div className="relative overflow-hidden py-4 sm:py-6 lg:py-8">
        {/* Edge fade - Responsive */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 
                       bg-gradient-to-r from-white to-transparent z-20 pointer-events-none opacity-80"></div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 
                       bg-gradient-to-l from-white to-transparent z-20 pointer-events-none opacity-80"></div>

       {/* Auto-moving marquee - Perfect seamless loop */}
<div className="flex">
  <motion.div
    className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
    animate={{ 
      x: ["0%", "-33.333%"]  // 3 sets होने से 33.333% move करेंगे
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 90,  // Duration थोड़ा adjust किया
      ease: "linear",
      repeatType: "loop"
    }}
    style={{ 
      width: "fit-content" 
    }}
  >
    {/* First Set */}
    {[group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11, group12, group13, group14].map((logo, idx) => (
      <div key={`tech-first-${idx}`} className="group relative flex-shrink-0">
        <div className="relative w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 xl:w-52 xl:h-36
                      flex items-center justify-center rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 
                      bg-white border border-gray-200 shadow-sm sm:shadow-md transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:border-orange-400 hover:bg-white
                      overflow-hidden mx-1 sm:mx-0">
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 z-10">
            <Image
              src={logo}
              alt={`Tech ${idx + 1}`}
              width={120}
              height={60}
              className="object-contain w-full h-full 
                       max-w-[80px] max-h-[40px] 
                       sm:max-w-[100px] sm:max-h-[50px]
                       md:max-w-[110px] md:max-h-[55px]
                       lg:max-w-[120px] lg:max-h-[60px]
                       xl:max-w-[140px] xl:max-h-[70px]
                       transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(251,146,60,0.05)_100%)]"></div>
        </div>
      </div>
    ))}
    
    {/* Second Set (Duplicate) */}
    {[group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11, group12, group13, group14].map((logo, idx) => (
      <div key={`tech-second-${idx}`} className="group relative flex-shrink-0">
        <div className="relative w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 xl:w-52 xl:h-36
                      flex items-center justify-center rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 
                      bg-white border border-gray-200 shadow-sm sm:shadow-md transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:border-orange-400 hover:bg-white
                      overflow-hidden mx-1 sm:mx-0">
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 z-10">
            <Image
              src={logo}
              alt={`Tech ${idx + 1}`}
              width={120}
              height={60}
              className="object-contain w-full h-full 
                       max-w-[80px] max-h-[40px] 
                       sm:max-w-[100px] sm:max-h-[50px]
                       md:max-w-[110px] md:max-h-[55px]
                       lg:max-w-[120px] lg:h-[60px]
                       xl:max-w-[140px] xl:max-h-[70px]
                       transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(251,146,60,0.05)_100%)]"></div>
        </div>
      </div>
    ))}
    
    {/* Third Set (Duplicate) - यही मुख्य बदलाव है! */}
    {[group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11, group12, group13, group14].map((logo, idx) => (
      <div key={`tech-third-${idx}`} className="group relative flex-shrink-0">
        <div className="relative w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 xl:w-52 xl:h-36
                      flex items-center justify-center rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 
                      bg-white border border-gray-200 shadow-sm sm:shadow-md transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:border-orange-400 hover:bg-white
                      overflow-hidden mx-1 sm:mx-0">
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 z-10">
            <Image
              src={logo}
              alt={`Tech ${idx + 1}`}
              width={120}
              height={60}
              className="object-contain w-full h-full 
                       max-w-[80px] max-h-[40px] 
                       sm:max-w-[100px] sm:max-h-[50px]
                       md:max-w-[110px] md:max-h-[55px]
                       lg:max-w-[120px] lg:max-h-[60px]
                       xl:max-w-[140px] xl:max-h-[70px]
                       transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(251,146,60,0.05)_100%)]"></div>
        </div>
      </div>
    ))}
  </motion.div>

        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
}

export default Home; 