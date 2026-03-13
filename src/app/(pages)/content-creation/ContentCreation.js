'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { 
  SparkleIcon, Zap, Rocket, ArrowRight, 
  Smartphone, Mail, MapPin, Globe, Cloud,
  Brush, Film, Type, Camera, Edit3, MessageCircle,
  FileText, Video,
} from "lucide-react";

const ContentCreation = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Animation hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Animation variants - SAME AS WEB DEVELOPMENT
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Content Creation Services Data - NOW 6 ITEMS LIKE WEB DEVELOPMENT
  const contentServices = [
    {
      id: 1,
      title: "Creative Post & Story Design",
      description: "Crafting eye-catching, creative stories that enhance engagement and brand identity.",
      bullets: ["Social Media Posts", "Instagram Stories", "Brand Visuals"],
      color: "orange",
      iconComponent: <Brush className="w-8 h-8 text-white" />
    },
    {
      id: 2,
      title: "Short Videos, Reels & Visual Storytelling",
      description: "Engaging short videos and reels that tell your brand story creatively.",
      bullets: ["Short Videos", "Instagram Reels", "Visual Storytelling"],
      color: "blue",
      iconComponent: <Video className="w-8 h-8 text-white" />
    },
    {
      id: 3,
      title: "Copywriting & Caption Writing",
      description: "Compelling catchy captions that engage audiences and strengthen brand voice.",
      bullets: ["Creative Copywriting", "Engaging Captions", "Brand Voice"],
      color: "orange",
      iconComponent: <Type className="w-8 h-8 text-white" />
    },
    {
      id: 4,
      title: "Product Photography & Videography",
      description: "Professional product photography and videography for brand promotion.",
      bullets: ["Product Photography", "Commercial Videography", "Brand Promotion"],
      color: "blue",
      iconComponent: <Camera className="w-8 h-8 text-white" />
    },
    {
      id: 5,
      title: "Blog Writing & SEO Content",
      description: "High-quality blog writing and SEO content that boosts rankings and drives organic traffic.",
      bullets: ["Blog Writing", "SEO Content", "Organic Traffic"],
      color: "purple",
      iconComponent: <Edit3 className="w-8 h-8 text-white" />
    },
    {
      id: 6,
      title: "Social Media Strategy & Management",
      description: "Comprehensive social media strategies and ongoing content management.",
      bullets: ["Strategy Planning", "Content Management", "Audience Growth"],
      color: "emerald",
      iconComponent: <MessageCircle className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section - EXACTLY LIKE WEB DEVELOPMENT PAGE */}
      <motion.section 
        ref={heroRef}
        className="relative pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center w-full bg-white"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background - SAME AS WEB DEVELOPMENT */}
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* SVG Lines - SAME AS WEB DEVELOPMENT */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            className="absolute bottom-[-80px] left-0 w-full h-[120%]"
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

        {/* CONTENT WITH IMAGE - EXACTLY AS WEB DEVELOPMENT */}
        <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6 w-full mb-8">
          
          {/* Mobile: Column, Desktop: Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            
            {/* LEFT SIDE - TEXT CONTENT - SARE TEXT CENTER KIYE HAIN MOBILE PE */}
<div className="md:w-2/3">
  <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-6 w-full">
    
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 text-center md:text-left w-full"
      variants={slideUpVariants}
      initial="hidden"
      animate={isHeroInView ? "visible" : "hidden"}
    >
      Content Creation
    </motion.h1>
  </div>

  <motion.h2 
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700 mb-6 md:mb-8 text-center md:text-left w-full"
    variants={slideUpVariants}
    initial="hidden"
    animate={isHeroInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 }}
  >
    TELL. ENGAGE.
  </motion.h2>

  <motion.p 
    className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0"
    variants={slideUpVariants}
    initial="hidden"
    animate={isHeroInView ? "visible" : "hidden"}
    transition={{ delay: 0.3 }}
  >
    We create <span className="text-orange-600 font-medium">stunning visual content</span>that tells your brand's story, engages target audiences, and delivers measurable impact across video production, motion graphics, and digital campaigns. 
  </motion.p>

  <motion.div 
    className="flex flex-wrap gap-3 sm:gap-4 mb-8 md:mb-10 justify-center md:justify-start w-full"
    variants={staggerContainer}
    initial="hidden"
    animate={isHeroInView ? "visible" : "hidden"}
    transition={{ delay: 0.4 }}
  >
    <Link href="/contact-us" className="mt-auto">
      <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-xl w-full sm:w-auto">
        Start Creating
      </Button>
    </Link>
  </motion.div>
</div>
            {/* RIGHT SIDE - IMAGE CONTAINER */}
            <motion.div 
              className="md:w-1/3 flex-shrink-0 w-full"
              variants={slideUpVariants}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              <div className="relative w-full h-auto flex items-center justify-center">
                <div className="relative transform md:rotate-6 mx-auto md:mx-0">
                  <Image
                    src="/images/contentimage.png"
                    alt="Content Creation"
                    width={500}
                    height={500}
                    priority
                    className="object-contain max-h-[150px] sm:max-h-[180px] md:max-h-[240px] lg:max-h-[280px] xl:max-h-[320px] w-auto drop-shadow-2xl mx-auto md:mx-0"
                    style={{ 
                      height: 'auto',
                      maxWidth: '100%',
                      filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))'
                    }}
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-full blur-2xl -z-10 scale-110"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section - EXACTLY LIKE WEB DEVELOPMENT PAGE */}
      <motion.section
        ref={servicesRef}
        className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern - SAME AS WEB DEVELOPMENT */}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Content Creation
                <span className="block mt-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600">
                    Solutions
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
             We produce engaging visual content that brings brand stories to life from commercial photography and corporate videography to motion design and creative direction helping brands connect with audiences and strengthen their digital presence.
              </p>
            </motion.div>
          </div>

          {/* FIXED GRID: 1 column on mobile, 2 columns on tablet, 3 columns on desktop - SAME AS WEB DEVELOPMENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* All 6 boxes in one grid - EXACT SAME LAYOUT AS WEB DEVELOPMENT */}
            {/* Creative Post & Story Design - Orange Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-orange-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-100/50 group-hover:border-orange-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-orange-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center group-hover:from-orange-600 group-hover:to-amber-500 transition-all duration-400">
                          <Brush className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
                    Creative Post & Story Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    Strategically designed social media posts and stories that capture attention, communicate brand values, and drive daily engagement.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Social Media Posts", "Instagram Stories", "Brand Visuals","Daily Engagement"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-orange-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:bg-orange-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Short Videos, Reels & Visual Storytelling - Blue Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-blue-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:border-blue-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-400">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
                    Short Videos, Reels & Visual Storytelling
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                   High-impact short-form video content including reels and stories crafted to entertain, inform, and convert audiences across platforms.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Short Videos", "Instagram Reels", "Visual Storytelling","Platform Optimization"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-blue-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Copywriting & Caption Writing - Orange Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-orange-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-100/50 group-hover:border-orange-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-orange-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center group-hover:from-orange-600 group-hover:to-amber-500 transition-all duration-400">
                          <Type className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
                    Copywriting & Caption Writing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    Compelling Content & Captions that reflect brand voice, connect with target audiences, and encourage meaningful interactions.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Creative Copywriting", "Engaging Captions", "Brand Voice","Audience Connection"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-orange-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:bg-orange-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product Photography & Videography - Blue Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-blue-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:border-blue-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-400">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
                    Product Photography & Videography
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    Professional photography and videography showcasing products with precision, creativity, and brand alignment.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Product Photography", "Commercial Videography", "Brand Promotion","Creative Direction"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-blue-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Blog Writing & SEO Content - Purple Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-violet-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-violet-100/50 group-hover:border-violet-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-violet-200/30 to-purple-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-50 to-white border border-violet-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-violet-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-violet-500 to-purple-400 flex items-center justify-center group-hover:from-violet-600 group-hover:to-purple-500 transition-all duration-400">
                          <Edit3 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-violet-700 transition-colors duration-400">
                    Blog Writing & SEO Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    Research-backed blog posts and SEO-optimized content that improve search visibility, establish authority, and drive organic traffic
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Blog Writing", "SEO Content", "Organic Traffic","Authority Building"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-violet-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-violet-500 group-hover/item:bg-violet-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-violet-600 hover:to-purple-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social Media Strategy & Management - Emerald Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl p-8 border border-emerald-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-100/50 group-hover:border-emerald-300 transition-all duration-500 h-full flex flex-col overflow-hidden">
                
                {/* Light Spread Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:border-emerald-300 transition-all duration-400 flex items-center justify-center mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-400">
                          <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-700 transition-colors duration-400">
                    Content Strategy & Scriptwriting
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                   Strategic planning and compelling scriptwriting that align your message according to audience needs and platform requirements.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Content Strategy", "Scriptwriting", "	Storyboarding","Targeting Audience"].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-emerald-100/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:bg-emerald-600 group-hover/item:scale-125 transition-all duration-300 relative"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-500 transition-all duration-400 relative overflow-hidden group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContentCreation;