"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import { 
  SparkleIcon, Zap, Rocket, ArrowRight, Gamepad2, 
  Palette, Sparkles, Code, Volume2, ShieldCheck, 
  ChevronLeft, ChevronRight, Trophy, Download,
  Smartphone, Globe, Cloud
} from "lucide-react";

// Import images
import Portfolio1 from "../../../../public/images/fire-era.png";
import Portfolio2 from "../../../../public/images/cloud-era.png";
import Portfolio3 from "../../../../public/images/jungle-era.png";
import Portfolio4 from "../../../../public/images/bas-era.png";
import Portfolio5 from "../../../../public/images/tail-era.png";
import Drone1 from "../../../../public/images/Drone1.png"; // Sticker image

// Import tools images
import Tool1 from "../../../../public/images/imglogo1.png";
import Tool2 from "../../../../public/images/fire-base-300x300-1-re8yb1dmo2rylqucxwgyme8gnahh03aypu0s6wj9ds.png";
import Tool3 from "../../../../public/images/c-sharp-c-logo-png_-300x300-1-re8ybcnoy37eh2dz41chgbdzrwxvkgjqrduly82jb4.png";
import Tool4 from "../../../../public/images/Ellipse-10.png";

const GameDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Refs for sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Animation hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isPortfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const isToolsInView = useInView(toolsRef, { once: true, amount: 0.2 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 });

  useEffect(() => {
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // RIOT STYLE PORTFOLIO ITEMS WITH PLAYSTORE LINKS
  const games = [
    {
      id: 1,
      image: Portfolio1,
      title: "Fireworks Games Simulator 2025",
      category: "Simulation",
      stats: "4.9★ | 30K+ DOWNLOADS",
      description: "Design your dream Diwali or New Year show! Enjoy eco-friendly, smoke-free fireworks with stunning 3D graphics and explosive ASMR sounds. Light rockets, sparklers & TNT in an open-world city with funny smoke faces and extreme weather effects.",
      features: ["Open World", "Explosive FX ", "Festival Fun"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.EraFlip.FireworkSimulator2025&hl=en"
    },
    {
      id: 2,
      image: Portfolio2,
      title: "Flappy Sky Cloud Runner",
      category: "Endless Runner",
      stats: "4.6★ | 5K+ DOWNLOADS",
      description: "Tap to fly! Guide your cute cloud through the sky, dodge birds, and survive as long as you can. Simple one-tap controls, and addictive one more try gameplay. Unlock new cloud skins and enjoy dynamic weather effects!",
      features: ["Tap-to-Fly ", "Unlockable Skins ", "Endless Fun"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.EraFlip.FlappyCloudy&hl=en"
    },
    {
      id: 3,
      image: Portfolio3,
      title: "Jungle Fury",
      category: "2D PlatFormer Game",
      stats: "4.7★ | 10K+ DOWNLOADS",
      description: "Escape the erupting volcano! Climb ancient totems, dodge falling rocks, and outrun rising lava in this thrilling vertical platformer. Test your reflexes, collect coins, and survive the cursed jungle. Tilt or swipe controls with!",
      features: ["Vertical Climber ", "Lava Escape ", "Reflex Test"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.eraflip.junglefury&hl=en"
    },
    {
      id: 4,
      image: Portfolio4,
      title: "Basket Maze",
      category: "Puzzle Game",
      stats: "4.9★ | 5K+ DOWNLOADS",
      description: "Guide the ball into the basket! Navigate through tricky mazes filled with spikes, spinning saws, and moving platforms. Choose from basketball, soccer ball, cricket ball, golf ball, and more. Realistic tilt controls, 50+ levels, and unlockable balls!",
      features: ["Physics Puzzle ", "Gesture Touch ", "50+ Levels"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.EraFlip.BasketMaze&hl=en"
    },
    {
      id: 5,
      image: Portfolio5,
      title: "Jumpy Tails",
      category: "Endless Runner",
      stats: "4.5★ | 5K+ DOWNLOADS",
      description: "Run, jump, and slide with cute animals! Control lions, monkeys, and tigers in this endless runner adventure. Dodge obstacles, collect coins, and unlock new animals with unique abilities. Simple swipe controls with vibrant worlds!",
      features: ["Endless Runner ", "Animal Adventure ", "Unlockable Abilities"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.EraFlip.JumpyTails&hl=en"
    },
  ];

  // Auto slide functionality for portfolio
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % games.length);
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, games.length]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  // Animation variants
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

  const slideLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const portfolioSlideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1,   
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Game Services Data with New Card Style
  const gameServices = [
    {
      id: 1,
      title: "Full Game Development",
      description: "High-performance game solutions using Unity, Unreal Engine, Godot, and custom engines for Android, iOS, PC, Web, AR & VR platforms.",
      bullets: ["Unity / Unreal Engine", "Multiplayer Games", "AR / VR Support"],
      color: "orange",
      iconComponent: <Gamepad2 className="w-8 h-8 text-white" />
    },
    {
      id: 2,
      title: "Game Design & UI/UX",
      description: "Immersive game design, character modeling, level design and user interfaces that captivate players with stunning visuals.",
      bullets: ["Level Design", "UI/UX", "Character Art"],
      color: "blue",
      iconComponent: <Palette className="w-8 h-8 text-white" />
    },
    {
      id: 3,
      title: "2D/3D Art & Animation",
      description: "Stunning 2D/3D graphics, character modeling, texture art and fluid animations that bring games to life with creative innovation.",
      bullets: ["2D Art", "3D Modeling", "Animations"],
      color: "orange",
      iconComponent: <Sparkles className="w-8 h-8 text-white" />
    },
    {
      id: 4,
      title: "Programming & Gameplay",
      description: "High-performance game programming, physics engines, AI programming and engaging gameplay mechanics with optimized code.",
      bullets: ["Game Logic", "AI Systems", "Physics"],
      color: "blue",
      iconComponent: <Code className="w-8 h-8 text-white" />
    },
    {
      id: 5,
      title: "Sound & Music Design",
      description: "Immersive sound effects and original music scores with Dolby Atmos integration that enhance the gaming experience.",
      bullets: ["Sound FX", "Background Music", "Voice Overs"],
      color: "purple",
      iconComponent: <Volume2 className="w-8 h-8 text-white" />
    },
    {
      id: 6,
      title: "QA & Game Testing",
      description: "Comprehensive quality assurance and testing to ensure flawless, bug-free gameplay across all devices and platforms.",
      bullets: ["Bug Testing", "Performance QA", "Device Testing"],
      color: "emerald",
      iconComponent: <ShieldCheck className="w-8 h-8 text-white" />
    }
  ];

  return (
      <div className="min-h-screen w-full bg-white">
      {/* FIRST SECTION - AB TEXT PROPER CENTER HOGA MOBILE PE */}
<motion.section 
  ref={heroRef}
  className="relative pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center w-full bg-white"
  initial={{ opacity: 0 }}
  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 1 }}
>
  {/* Animated Background */}
  <div className="absolute inset-0 overflow-clip">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  </div>

  {/* SVG Lines */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <svg
      className="absolute bottom-[-80px] left-0 w-full h-[120%]"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 520C300 420 600 680 900 640C1140 610 1320 520 1440 560" stroke="rgba(59,130,246,0.14)" strokeWidth="3" />
      <path d="M0 600C320 500 640 740 960 700C1200 670 1320 600 1440 640" stroke="rgba(249,115,22,0.14)" strokeWidth="3" />
      <path d="M0 680C360 580 720 780 1080 740C1260 720 1350 680 1440 720" stroke="rgba(34,197,94,0.14)" strokeWidth="3" />
    </svg>
  </div>

  {/* CONTENT - SIRF YAHAN TEXT CENTER KIYA HAI MOBILE PE */}
  <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6 w-full mb-8">
    
    {/* Mobile: Column with center alignment, Desktop: Row */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
      
      {/* LEFT SIDE - TEXT CONTENT - SARE TEXT CENTER KIYE HAIN MOBILE PE */}
      <div className="md:w-2/3">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-6 w-full">
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 text-center md:text-left w-full" // ← YAHAN CHANGE: text-center for mobile, md:text-left for desktop
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            Game Development
          </motion.h1>
        </div>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700 mb-6 md:mb-8 text-center md:text-left w-full" // ← YAHAN CHANGE: text-center for mobile
          variants={slideUpVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          CREATE. PLAY.
        </motion.h2>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0" // ← YAHAN CHANGE: text-center for mobile with mx-auto
          variants={slideUpVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          From concept to completion we execute every <span className="text-orange-600 font-medium">stage of game creation </span>  including artistic design, technical development, multiplayer integration, audio engineering, performance testing, and global distribution  delivering exceptional experiences on every platform.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-4 mb-8 md:mb-10 justify-center md:justify-start w-full" // ← YAHAN CHANGE: justify-center for mobile
          variants={staggerContainer}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <Link href="/contact-us" className="mt-auto">
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-xl w-full sm:w-auto">
              Build Your Game
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SIDE - STICKER CONTAINER - Mobile center, Desktop right */}
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
              src="/images/remote3.webp"
              alt="Game Development Sticker"
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
      {/* Services Section - RESPONSIVE GRID LIKE OTHER PAGES */}
      <motion.section
        ref={servicesRef}
        className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Header Section - RESPONSIVE TEXT */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Game Development
                <span className="block mt-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600">
                    Solutions
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We deliver end-to-end game development solutions that captivate global players  fusing creative innovation with technical precision to build experiences that entertain, engage, and endure.
              </p>
            </motion.div>
          </div>

          {/* Services Grid - 1 column mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Full Game Development - Orange Theme */}
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
                          <Gamepad2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
                    Full Game Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    End-to-end game production using Unity, Unreal Engine, Godot, and custom engines delivering high-performance experiences for Android, iOS, PC, Web, AR, and VR platforms.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Social Features Integration ", "Multiplayer Games", "Multiplayer Games", "Cross-Platform Optimization"].map((feature, index) => (
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

            {/* Game Design & UI/UX - Blue Theme */}
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
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
                    Game Design & UI/UX
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    Creative game design, character development, level architecture and user-centric interfaces that immerse players in visually stunning worlds.                         
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Character Modeling ","Level Design ","Visual Storytelling","UI Design"].map((feature, index) => (
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

            {/* 2D/3D Art & Animation - Orange Theme */}
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
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-700 transition-colors duration-400">
                    2D/3D Art & Animation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                   High-quality 2D/3D visuals, character modeling, texture painting and smooth animations that bring unique artistic visions to life.               
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Character Design ", "Environment Art", "3D Assets", "Fluid Animation"].map((feature, index) => (
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

            {/* Programming & Gameplay - Blue Theme */}
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
                          <Code className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-400">
                    Programming & Gameplay
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                    High-performance coding solutions featuring intelligent AI, realistic physics, and well-structured game logic  built for reliability and scalability.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["AI Programming", "Scalable Architecture", "Code Optimization","Responsive Gameplay"].map((feature, index) => (
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

            {/* Sound & Music Design - Purple Theme */}
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
                          <Volume2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-violet-700 transition-colors duration-400">
                    Sound & Music Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                   We provide end-to-end audio solutions custom-built for your game  including custom sound effects, original music composition, and professional voice overs.          
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Sound Design", "Voice Production", "Audio Integration","Music Design"].map((feature, index) => (
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

            {/* QA & Game Testing - Emerald Theme */}
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
                          <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-700 transition-colors duration-400">
                    QA & Game Testing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-400">
                   Thorough testing protocols covering bug tracking, performance benchmarking, and device compatibility  ensuring your game launches without issues.
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow mt-6">
                    <div className="space-y-3">
                      {["Bug Tracking", "System Performance", "Stability Testing","Final Validation"].map((feature, index) => (
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

       
      {/* Portfolio Section - RESPONSIVE */}
<motion.section
  ref={portfolioRef}
  className="py-8 md:py-12 px-4 md:px-6 w-full overflow-x-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="container mx-auto max-w-6xl w-full">
    {/* NEW HEADING WITH STICKER - TEXT AND STICKER IN SAME LINE */}
    <motion.div 
      className="text-center mb-8 md:mb-12 w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Heading Container with Flex */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
        {/* Main Heading Text */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
        >
          GAMES <span className="text-orange-500">PORTFOLIO</span>
        </motion.h2>
      </div>
      
      {/* Description Box */}
      <motion.div 
        className="bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200/50 mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          Driven by innovation and a passion for digital excellence, we create experiences that entertain, inspire, and leave a lasting impact. 
        </p>
      </motion.div>
    </motion.div>
    
    {games.map((game, index) => {
      return (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: index * 0.1
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl overflow-hidden"
        >
          {index % 2 === 0 ? (
            <>
              {/* EVEN BOX - Mobile: Content first, Image second | Desktop: Content left, Image right */}
              <motion.div 
                className="order-1 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block mb-3 text-xs font-bold tracking-widest text-orange-600">{game.category}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">{game.title}</h3>
                <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">{game.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">{game.stats}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{game.description}</p>
                <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  {game.features.map((feature, i) => (
                    <li key={i} className="px-3 py-1 sm:px-4 sm:py-2 text-xs font-bold bg-gray-100 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Play Store Button with Link */}
                {game.playStoreLink ? (
                  <a href={game.playStoreLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 text-white rounded-xl text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                      <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                          <Image 
                            src="/images/logoplay.png" 
                            alt="Play Store" 
                            width={20} 
                            height={20}
                            className="object-contain"
                          />
                        </div>
                        Play Store
                      </div>
                    </Button>
                  </a>
                ) : (
                  <Button className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-xl text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3" disabled>
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <Image 
                          src="/images/logoplay.png" 
                          alt="Play Store" 
                          width={20} 
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      Coming Soon
                    </div>
                  </Button>
                )}
              </motion.div>

              <motion.div 
                className="order-2 md:order-2 relative w-full h-[280px] sm:h-[320px] md:h-[480px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image src={game.image} alt={game.title} fill className="object-contain" />
              </motion.div>
            </>
          ) : (
            <>
              {/* ODD BOX - Mobile: Content first, Image second | Desktop: Image left, Content right */}
              <motion.div 
                className="order-2 md:order-1 relative w-full h-[280px] sm:h-[320px] md:h-[480px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image src={game.image} alt={game.title} fill className="object-contain" />
              </motion.div>

              <motion.div 
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="inline-block mb-3 text-xs font-bold tracking-widest text-orange-600">{game.category}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">{game.title}</h3>
                <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">{game.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">{game.stats}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{game.description}</p>
                <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  {game.features.map((feature, i) => (
                    <li key={i} className="px-3 py-1 sm:px-4 sm:py-2 text-xs font-bold bg-gray-100 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Play Store Button with Link */}
                {game.playStoreLink ? (
                  <a href={game.playStoreLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 text-white rounded-xl text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                      <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                          <Image 
                            src="/images/logoplay.png" 
                            alt="Play Store" 
                            width={20} 
                            height={20}
                            className="object-contain"
                          />
                        </div>
                        Play Store
                      </div>
                    </Button>
                  </a>
                ) : (
                  <Button className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-xl text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3" disabled>
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <Image 
                          src="/images/logoplay.png" 
                          alt="Play Store" 
                          width={20} 
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      Coming Soon
                    </div>
                  </Button>
                )}
              </motion.div>
            </>
          )}
        </motion.div>
      );
    })}
  </div>
</motion.section>

 <section className="py-10 md:py-14 lg:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">

    {/* Simple Header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Powering Games With{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
          Cutting-Edge Tools
        </span>
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Our games are built using the latest technologies  ensuring smooth performance, stunning visuals, and seamless gameplay.
      </p>
    </div>

    {/* Desktop - Clean Cards */}
    <div className="hidden lg:block">
      <div className="flex justify-center gap-8 lg:gap-12">
        {[Tool1, Tool2, Tool3, Tool4].map((toolImg, index) => (
          <div key={index} className="group">
            <div className="w-48 h-32 flex items-center justify-center rounded-xl p-6 
                          bg-white border border-orange-200 
                          shadow-lg transition-all duration-300 
                          hover:scale-105 hover:shadow-xl hover:border-orange-400">
              <Image
                src={toolImg}
                alt={`Tool ${index + 1}`}
                width={140}
                height={70}
                className="object-contain max-w-full max-h-16 
                         transition-transform duration-300 
                         group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile - Simple Grid */}
    <div className="lg:hidden">
      <div className="grid grid-cols-2 gap-6">
        {[Tool1, Tool2, Tool3, Tool4].map((toolImg, index) => (
          <div key={index} className="group">
            <div className="bg-white rounded-xl p-6 border border-orange-200 
                          shadow-md transition-all duration-300 
                          hover:shadow-lg flex items-center justify-center">
              <div className="h-28 flex items-center justify-center">
                <Image
                  src={toolImg}
                  alt={`Tool ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-16 
                           transition-transform duration-300 
                           group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
    
    </div>
  );
};



export default GameDevelopment;