'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../../public/images/Eraflip-Countermesh.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => path === "/" ? pathname === path : pathname.startsWith(path);

  const services = [
    { name: "Game Development", path: "/game-development" },
    { name: "Web Development", path: "/web-development" },
    { name: "Web Applications", path: "/web-applications-frameworks" },
    { name: "Odoo Development", path: "/odoo-development-integration" },
    { name: "Digital Marketing", path: "/digital-marketing-ppc-campaigns" },
    { name: "Social Media", path: "/social-media-management" },
    { name: "Content Creation", path: "/content-creation" },
    { name: "SEO", path: "/search-engine-optimization" },
    { name: "Design Services", path: "/design-creative-services" },
    { name: "IoT Solutions", path: "/iot-smart-solutions" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsMobileServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMobileClickOutside);
    return () => document.removeEventListener("mousedown", handleMobileClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const handleServicesClick = () => setIsServicesOpen(!isServicesOpen);

  const handleMobileServicesClick = () => setIsMobileServicesOpen(!isMobileServicesOpen);

  const handleLinkClick = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent md:mt-5">
      <div className="relative mx-auto max-w-4xl px-4">
        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
          isScrolled ? 'bg-[#0b2b4f]/88 shadow-lg' : 'bg-[#0b2b4f]/88 shadow-md'
        }`}></div>

        <div className="relative rounded-2xl pl-2 pr-8 sm:pl-3 sm:pr-6 md:pl-4 md:pr-8 py-3">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <Link href="/home" onClick={handleLinkClick} className="group">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative p-1.5 sm:p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-gray-300">
                    <div className="relative p-1 sm:p-1.5">
                      <Image
                        src={logo}
                        alt="ERAFLIP Logo"
                        className="h-7 sm:h-8 w-auto object-contain relative z-10"
                        width={70}
                        height={28}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-white">ERAFLIP TECH</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-auto mr-0">
              <Link
                href="/home"
                onClick={handleLinkClick}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive("/home") ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Home</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ${
                  isActive("/home") ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}></span>
              </Link>

              <Link
                href="/about-us"
                onClick={handleLinkClick}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive("/about-us") ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">About</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ${
                  isActive("/about-us") ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}></span>
              </Link>

              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={handleServicesClick}
                  className={`flex items-center text-sm font-medium transition-all duration-200 relative group ${
                    isServicesOpen || isActive("/services") ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown
                    className={`ml-1 w-3 h-3 transition-all duration-200 ${
                      isServicesOpen ? 'rotate-180 text-orange-400' : 'text-gray-400 group-hover:text-orange-400'
                    }`}
                  />
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ${
                    (isServicesOpen || isActive("/services")) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}></span>
                </button>

                {isServicesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-[#0b2b4f]/88 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.path}
                          className={`flex items-center px-4 py-2.5 text-sm transition-all duration-200 hover:bg-white/10 hover:text-white ${
                            isActive(service.path) ? 'bg-orange-500 text-white font-medium' : 'text-gray-300'
                          }`}
                          onClick={handleLinkClick}
                        >
                          <span className="mr-2 text-white">•</span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                onClick={handleLinkClick}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600"
              >
                <span className="relative z-10">Contact</span>
              </Link>
            </nav>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-[#0b2b4f] text-gray-300 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileServicesRef}
          className="lg:hidden fixed inset-x-4 top-16 mx-auto max-w-md bg-[#0b2b4f]/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg z-50 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          <div className="p-4 sm:p-6">
            <Link
              href="/home"
              onClick={handleLinkClick}
              className={`flex items-center py-3 text-base font-medium border-b border-gray-700 ${
                isActive("/home") ? "text-white bg-orange-500 rounded-lg px-4" : "text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg hover:px-4"
              } transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`flex items-center py-3 text-base font-medium border-b border-gray-700 ${
                isActive("/about-us") ? "text-white bg-orange-500 rounded-lg px-4" : "text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg hover:px-4"
              } transition-all duration-300`}
            >
              About
            </Link>

            <div className="border-b border-gray-700">
              <button
                onClick={handleMobileServicesClick}
                className={`flex justify-between items-center w-full py-3 text-base font-medium transition-all duration-300 ${
                  isMobileServicesOpen ? "text-white rounded-lg px-4" : "text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg hover:px-4"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-orange-400' : 'text-gray-400'}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 sm:pl-6 pb-3 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className={`flex items-center py-2.5 text-sm transition-colors rounded-lg px-4 ${
                        isActive(service.path) 
                          ? 'bg-orange-500 text-white font-medium' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                      onClick={handleLinkClick}
                    >
                      <span className="mr-2 text-white">•</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              onClick={handleLinkClick}
              className={`flex items-center justify-center py-3 px-4 text-base font-medium rounded-lg mt-4 ${
                isActive("/contact-us") 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md"
              } transition-all duration-300`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;