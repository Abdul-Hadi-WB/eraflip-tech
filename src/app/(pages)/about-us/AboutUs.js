'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import imgy from "../../../../public/images/imgy.png";
import image1 from "../../../../public/images/image1.png";
import imgv from "../../../../public/images/imgv.png";

import {
  Gamepad2, Trophy, Users, Zap, Target, Shield, Sword, Crown,
  Rocket, Sparkles, TrendingUp, ArrowRight, Cpu, Globe, Code,
  Cloud, Smartphone, Server, BarChart3, Star, Award, Flame,
  Swords, Crosshair, Briefcase, Palette, Linkedin, Joystick, Cctv
} from 'lucide-react';

/* ================= MAIN COMPONENT ================= */
export default function AboutUs() {
  /* ---------- Refs ---------- */
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const techRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const videoRef = useRef(null);
  const cardRefs = useRef([]);

  /* ---------- States ---------- */
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Category',
    budget: '',
    details: ''
  });
  
  /* ---------- Page Load State ---------- */
  const [pageLoaded, setPageLoaded] = useState(false);

  /* ---------- Page Load Effect ---------- */
  useEffect(() => {
    // Set page loaded after a small delay for animations
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* ---------- Video Logic ---------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = "/images/4k_Video_Technology_Looped_Background_No_Copyright_Loop_Background_Video_1080p.mp4";
    video.preload = "auto";

    const onLoaded = async () => {
      setVideoLoaded(true);
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch {
        // Auto-play was prevented
        setIsVideoPlaying(false);
      }
    };

    const onError = () => setVideoError(true);

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('error', onError);

    return () => {
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('error', onError);
    };
  }, []);

  /* ---------- Form Handler ---------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: 'Category',
      budget: '',
      details: ''
    });
    // Show success message
    alert('Thank you for submitting your project! We will contact you soon.');
  };

  /* ---------- Newsletter Handler ---------- */
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.newsletterEmail?.value;
    if (email) {
      console.log('Newsletter signup:', email);
      // Reset form
      form.reset();
      // Show success message
      alert('Thank you for subscribing to our newsletter!');
    }
  };

  /* ---------- 3D Card Effect ---------- */
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((rect.height / 2 - y) / rect.height) * 8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  };

  // Baaki cards ke liye original class
  const cardClass = "bg-white rounded-xl sm:rounded-2xl md:rounded-[28px] p-4 sm:p-6 md:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-300 transition-all duration-200 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]";

  return (
    <div className="w-full bg-white relative">
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        /* ONE-TIME SLIDE ANIMATIONS - Only on page load */
        .slide-in {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }
        
        .slide-in-left {
          transform: translateX(-50px);
        }
        
        .slide-in-right {
          transform: translateX(50px);
        }
        
        .slide-in-up {
          transform: translateY(50px);
        }
        
        .slide-in-down {
          transform: translateY(-50px);
        }
        
        .slide-in-visible {
          transform: translateX(0) translateY(0) !important;
          opacity: 1 !important;
        }
        
        /* Stagger delays for sequential animations */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-700 { transition-delay: 700ms; }
        .delay-800 { transition-delay: 800ms; }
        .delay-900 { transition-delay: 900ms; }
        .delay-1000 { transition-delay: 1000ms; }
        .delay-1100 { transition-delay: 1100ms; }
        .delay-1200 { transition-delay: 1200ms; }
        
        /* Form input blur effects */
        .form-input-blur {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(209, 213, 219, 0.5);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .form-input-blur:focus {
          background: rgba(255, 255, 255, 1);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-color: rgba(249, 115, 22, 0.5);
          box-shadow: 0 4px 30px rgba(249, 115, 22, 0.2);
          outline: none;
        }
        
        .form-textarea-blur {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(209, 213, 219, 0.5);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .form-textarea-blur:focus {
          background: rgba(255, 255, 255, 1);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-color: rgba(249, 115, 22, 0.5);
          box-shadow: 0 4px 30px rgba(249, 115, 22, 0.2);
          outline: none;
        }
        
        /* INSTANT HOVER EFFECTS FOR CARDS */
        .instant-hover-card {
          transition: all 150ms ease-in-out !important;
        }
        
        .instant-hover-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45) !important;
          transition: all 100ms ease-in-out !important;
        }
        
        /* Technologies Cards Special Hover */
        .tech-card {
          transition: all 150ms ease-in-out !important;
          cursor: pointer;
        }
        
        .tech-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
          transition: all 100ms ease-in-out !important;
        }
        
        /* PAGE WIDTH REDUCTION TO 90% */
        .page-container {
          width: 90% !important;
          max-width: 1440px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        @media (max-width: 768px) {
          .slide-in-left,
          .slide-in-right,
          .slide-in-up,
          .slide-in-down {
            transform: translateY(30px);
          }
          
          .page-container {
            width: 95% !important;
          }
        }
        
        @media (max-width: 640px) {
          .page-container {
            width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>


{/* Hero Section - Responsive */}
<section
  ref={heroRef}
  className={`slide-in slide-in-up pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 bg-white relative overflow-hidden ${
    pageLoaded ? "slide-in-visible" : ""
  }`}
>
  <div className="page-container relative z-10">
    <div className="text-center mb-8 sm:mb-12">
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 border border-gray-300 rounded-full slide-in slide-in-down delay-100 ${
          pageLoaded ? "slide-in-visible" : ""
        }`}
      >
      </div>

      {/* Headings */}
      <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2 mt-10">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold slide-in slide-in-up delay-200 ${
            pageLoaded ? "slide-in-visible" : ""
          }`}
        >
          <span className="block text-orange-500">INNOVATE</span>
          TRANSFORM LEAD
        </h1>
      </div>

      {/* ===== Rounded Image with Stickers ===== */}
      <div
        className={`relative flex justify-center mt-20 sm:mt-5 md:mt-8 slide-in slide-in-up delay-600 ${
          pageLoaded ? "slide-in-visible" : ""
        }`}
      >
        <div className="w-full max-w-5xl lg:max-w-6xl px-2 sm:px-4 relative">
          
         {/* LEFT STICKER - Responsive */}
<img
  src="/images/imgy.png"
  alt="Left Sticker"
  className="absolute -left-6 sm:-left-8 md:-left-10 lg:-left-12 -top-20 sm:-top-22 md:-top-24 lg:-top-26 w-[120px] sm:w-[136px] md:w-[152px] lg:w-[168px] pointer-events-none z-10"
/>

          {/* RIGHT STICKER - Fixed positioning */}
          <img
            src="/images/image1.png"
            alt="Right Sticker"
            className="absolute -right-6 sm:-right-8 md:-right-10 lg:-right-12 -top-16 sm:-top-18 md:-top-20 lg:-top-22 w-26 sm:w-30 md:w-34 lg:w-38 pointer-events-none z-10"
          />

          <div className="overflow-hidden rounded-[400px] border border-gray-200 bg-white shadow-lg sm:shadow-xl">
            <img
              src="/images/imgv.png"
              alt="Our Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* ===== End Rounded Image ===== */}
    </div>
  </div>
</section>



    {/* About Section - Fully Responsive */}
      <section
        ref={aboutRef}
        className={`slide-in slide-in-up pt-[-30px] sm:pt-[-20px] md:pt-[-15px] pb-8 sm:pb-12 md:pb-16 px-3 sm:px-4 md:px-6 bg-white relative overflow-hidden delay-600 ${
          pageLoaded ? "slide-in-visible" : ""
        }`}
      >
        {/* BACKGROUND CURVED LINES */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            className="absolute bottom-[-60px] sm:bottom-[-80px] left-0 w-full h-[120%]"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 520C300 420 600 680 900 640C1140 610 1320 520 1440 560"
              stroke="rgba(59,130,246,0.14)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 600C320 500 640 740 960 700C1200 670 1320 600 1440 640"
              stroke="rgba(249,115,22,0.14)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 680C360 580 720 780 1080 740C1260 720 1350 680 1440 720"
              stroke="rgba(34,197,94,0.14)"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        <div className="page-container relative z-10">
          {/* Heading */}
          <div
            className={`text-center slide-in slide-in-down delay-700 ${
              pageLoaded ? "slide-in-visible" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              {/* Left line */}
              <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center">
                ABOUT <span className="text-orange-500">US</span>
              </h2>

              {/* Right line */}
              <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-gradient-to-l from-transparent via-orange-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* About Text */}
          <div
            className={`text-center max-w-full sm:max-w-2xl md:max-w-3xl mx-auto slide-in slide-in-up delay-800 ${
              pageLoaded ? "slide-in-visible" : ""
            }`}
          >
            <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base px-2 sm:px-0">
              At Eraflip Tech, we're more than just a game studio; we're a global
              powerhouse shaping the future of mobile entertainment. From modest
              beginnings, we've fostered creativity and innovation, developing games
              that resonate deeply with players across the globe.
            </p>
          </div>

          {/* VALUE BOXES */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Trust & Empowerment",
                desc: "We empower our talented team to make impactful decisions, fueled by a shared entrepreneurial mindset and a culture of trust.",
                icon: Shield,
                color: "blue",
                iconClass: "text-blue-500",
                bgClass: "bg-blue-50/30",
                hoverBgClass: "hover:bg-blue-50/60",
                borderClass: "border-blue-200",
                hoverBorderClass: "hover:border-blue-500",
                iconBgClass: "bg-blue-50",
                iconBorderClass: "border-blue-200",
                shadowClass: "shadow-[0_8px_25px_rgba(0,0,0,0.08)]",
                hoverShadowClass: "hover:shadow-[0_20px_45px_rgba(59,130,246,0.25)]",
              },
              {
                title: "Unleashing Potential",
                desc: "We believe in collaboration and shared knowledge, creating synergies that fuel growth across our ecosystem.",
                icon: Rocket,
                color: "orange",
                iconClass: "text-orange-500",
                bgClass: "bg-orange-50/30",
                hoverBgClass: "hover:bg-orange-50/60",
                borderClass: "border-orange-200",
                hoverBorderClass: "hover:border-orange-500",
                iconBgClass: "bg-orange-50",
                iconBorderClass: "border-orange-200",
                shadowClass: "shadow-[0_8px_25px_rgba(0,0,0,0.08)]",
                hoverShadowClass: "hover:shadow-[0_20px_45px_rgba(249,115,22,0.25)]",
              },
              {
                title: "Embracing Each Other",
                desc: "We value inclusivity and respect, building a culture that celebrates each individual's contributions and fosters unity.",
                icon: Users,
                color: "green",
                iconClass: "text-green-500",
                bgClass: "bg-green-50/30",
                hoverBgClass: "hover:bg-green-50/60",
                borderClass: "border-green-200",
                hoverBorderClass: "hover:border-green-500",
                iconBgClass: "bg-green-50",
                iconBorderClass: "border-green-200",
                shadowClass: "shadow-[0_8px_25px_rgba(0,0,0,0.08)]",
                hoverShadowClass: "hover:shadow-[0_20px_45px_rgba(34,197,94,0.25)]",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className={`
                    group ${item.bgClass} ${item.hoverBgClass}
                    border-2 ${item.borderClass} ${item.hoverBorderClass}
                    rounded-xl sm:rounded-2xl md:rounded-[28px] 
                    p-4 sm:p-5 md:p-6 lg:p-8 
                    transition-all duration-300 
                    hover:-translate-y-1 sm:hover:-translate-y-2
                    ${item.shadowClass} ${item.hoverShadowClass}
                  `}
                >
                  {/* Icon Circle */}
                  <div
                    className={`
                      w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 
                      flex items-center justify-center 
                      rounded-full border-2 
                      ${item.iconBorderClass} ${item.iconBgClass}
                      mb-3 sm:mb-4 md:mb-5
                      transition-all duration-300
                      group-hover:scale-105
                    `}
                  >
                    <IconComponent
                      className={`
                        w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 
                        ${item.iconClass}
                        group-hover:scale-105
                      `}
                    />
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR VALUES Section - Fully Responsive */}
      <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-3 sm:px-4 md:px-6">
        <div className="max-w-full lg:max-w-6xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Empowering Great People, Great{" "}
              <br className="hidden sm:block" /> Companies &{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text">
                Great Ideas
              </span>
            </h2>

            <div className="max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
                From the bustling hubs of Dubai and Bahrain to the heart of the US
                innovation scene, our story is far from over.
              </p>
            </div>
          </div>

          {/* First Row - Heading + 2 Boxes */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {/* Our Values Heading */}
            <div className="lg:w-1/3 flex items-center justify-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                  Our
                </h3>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-600 mt-1 sm:mt-2">
                  Values
                </h3>
              </div>
            </div>

            {/* 2 Boxes */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Open-Mindedness",
                  desc: "We embrace experimentation, take calculated risks, and encourage bold ideas to achieve exceptional outcomes.",
                  icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />,
                  cardGradient:
                    "linear-gradient(145deg, rgba(254, 243, 199, 0.9) 0%, rgba(255, 237, 213, 0.95) 50%, rgba(254, 215, 170, 0.9) 100%)",
                  borderGradient:
                    "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)",
                  iconGradient:
                    "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)",
                  shadow: "shadow-[0_10px_25px_rgba(249,115,22,0.1)]",
                  hoverShadow: "hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)]",
                  titleColor: "text-orange-800",
                  borderColor: "border-orange-100",
                },
                {
                  title: "Responsibility",
                  desc: "We approach every task with dedication and strive to deliver excellence in everything we create.",
                  icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />,
                  cardGradient:
                    "linear-gradient(145deg, rgba(219, 234, 254, 0.9) 0%, rgba(191, 219, 254, 0.95) 50%, rgba(147, 197, 253, 0.9) 100%)",
                  borderGradient:
                    "linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)",
                  iconGradient:
                    "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",
                  shadow: "shadow-[0_10px_25px_rgba(59,130,246,0.1)]",
                  hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]",
                  titleColor: "text-blue-800",
                  borderColor: "border-blue-100",
                },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div
                    className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border ${item.borderColor} transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden h-full`}
                    style={{
                      background: item.cardGradient,
                      boxShadow: item.shadow,
                    }}
                  >
                    {/* Animated Gradient Border on Hover */}
                    <div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{
                        background: item.borderGradient,
                        padding: "2px",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 pointer-events-none" />

                    {/* Icon Container */}
                    <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                      <div
                        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105"
                        style={{ background: item.iconGradient }}
                      >
                        <div className="relative z-10">{item.icon}</div>
                      </div>
                    </div>

                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold ${item.titleColor} text-center mb-2 sm:mb-3 md:mb-4`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Freedom",
                desc: "We value self-expression and flexibility, supporting bold ideas and innovative thinking.",
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />,
                cardGradient:
                  "linear-gradient(145deg, rgba(220, 252, 231, 0.9) 0%, rgba(187, 247, 208, 0.95) 50%, rgba(134, 239, 172, 0.9) 100%)",
                borderGradient:
                  "linear-gradient(135deg, #10b981, #34d399, #6ee7b7)",
                iconGradient:
                  "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
                shadow: "shadow-[0_10px_25px_rgba(16,185,129,0.1)]",
                hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]",
                titleColor: "text-green-800",
                borderColor: "border-green-100",
              },
              {
                title: "Growth",
                desc: "We are committed to personal and professional growth for our team and partners.",
                icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />,
                cardGradient:
                  "linear-gradient(145deg, rgba(237, 233, 254, 0.9) 0%, rgba(221, 214, 254, 0.95) 50%, rgba(196, 181, 253, 0.9) 100%)",
                borderGradient:
                  "linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)",
                iconGradient:
                  "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
                shadow: "shadow-[0_10px_25px_rgba(139,92,246,0.1)]",
                hoverShadow: "hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)]",
                titleColor: "text-purple-800",
                borderColor: "border-purple-100",
              },
              {
                title: "Passion",
                desc: "Passion fuels our work and adds excitement to every project.",
                icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />,
                cardGradient:
                  "linear-gradient(145deg, rgba(254, 243, 199, 0.9) 0%, rgba(255, 237, 213, 0.95) 50%, rgba(254, 215, 170, 0.9) 100%)",
                borderGradient:
                  "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)",
                iconGradient:
                  "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)",
                shadow: "shadow-[0_10px_25px_rgba(249,115,22,0.1)]",
                hoverShadow: "hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)]",
                titleColor: "text-orange-800",
                borderColor: "border-orange-100",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div
                  className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border ${item.borderColor} transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden h-full`}
                  style={{
                    background: item.cardGradient,
                    boxShadow: item.shadow,
                  }}
                >
                  {/* Animated Gradient Border on Hover */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: item.borderGradient,
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 pointer-events-none" />

                  {/* Icon Container */}
                  <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                    <div
                      className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105"
                      style={{ background: item.iconGradient }}
                    >
                      <div className="relative z-10">{item.icon}</div>
                    </div>
                  </div>

                  <h3
                    className={`text-base sm:text-lg md:text-xl font-bold ${item.titleColor} text-center mb-2 sm:mb-3 md:mb-4`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section - Responsive */}
<section
  ref={whoWeAreRef}
  className={`slide-in slide-in-up py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#fafafa] relative overflow-hidden delay-1200 ${
    pageLoaded ? 'slide-in-visible' : ''
  }`}
>
  <div className="page-container relative">

    {/* Top Hero Box */}
    <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
      <div
        className={`rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[32px] 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 
        py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 
        text-center md:text-left relative slide-in slide-in-left 
        ${pageLoaded ? 'slide-in-visible' : ''}`}
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 85%, #0a7cb0 100%)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
        }}
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-3xl tracking-widest uppercase mb-2 sm:mb-3 md:mb-4 text-white font-medium">
          Who We Are
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          A Creative Gaming & Tech Studio
        </h2>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 text-white opacity-90">
          We are a team of designers, developers, and strategists passionate about
          creating immersive games and digital experiences that inspire innovation,
          creativity, and growth.
        </p>
      </div>

      {/* Sticker - FIXED FOR ALL DEVICES */}
      {/* Mobile & Tablet (0-1023px): COMPLETELY HIDDEN */}
      {/* Desktop (1024px+): SHOWN WITH PROPER SIZE */}
      <div
        className={`absolute 
        bottom-[-5px] lg:bottom-[-1px] xl:bottom-[-1px]
        right-[-5px] lg:right-[-20px] xl:right-[-40px]
        w-0 lg:w-[180px] xl:w-[240px] 2xl:w-[320px]
        h-0 lg:h-auto
        pointer-events-none z-10 slide-in slide-in-right delay-300 
        ${pageLoaded ? 'slide-in-visible' : ''}
        hidden lg:block`}
      >
        <img
          src="/images/sticker.webp"
          alt="sticker"
          className="object-contain w-full h-full"
        />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

      {/* Mission Card */}
      <div
        className={`rounded-2xl p-6 sm:p-7 md:p-8 
        slide-in slide-in-left delay-200 
        ${pageLoaded ? 'slide-in-visible' : ''}`}
        style={{
          background: "linear-gradient(135deg, #fff6ec 0%, #ffe2c7 50%, #ffd6a5 100%)"
        }}
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 mx-auto shadow-sm">
          <Target className="w-6 h-6 text-orange-500" />
        </div>

        <p className="text-sm uppercase tracking-wider text-orange-500 text-center mb-2 font-medium">
          Mission
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-3">
          Empowering Ideas to Grow
        </h3>

        <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed max-w-md mx-auto">
          We help startups and creators turn innovative ideas into meaningful
          digital experiences using technology and design.
        </p>
      </div>

      {/* Vision Card */}
      <div
        className={`rounded-2xl p-6 sm:p-7 md:p-8 
        slide-in slide-in-right delay-300 
        ${pageLoaded ? 'slide-in-visible' : ''}`}
        style={{
          background: "linear-gradient(135deg, #f5f9ff 0%, #e1ecff 50%, #cfe0ff 100%)"
        }}
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 mx-auto shadow-sm">
          <Globe className="w-6 h-6 text-blue-500" />
        </div>

        <p className="text-sm uppercase tracking-wider text-blue-500 text-center mb-2 font-medium">
          Vision
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-3">
          Shaping Digital Futures
        </h3>

        <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed max-w-md mx-auto">
          We envision a future where creative technology connects people and
          builds inspiring digital worlds.
        </p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}