"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Home as HomeIcon,
  Users,
  MessageSquare,
  Globe,
  Search,
  Gamepad2,
  Code,
  PenTool,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Share2,
  Copy,
} from "lucide-react";

const Footer = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [footerVisible, setFooterVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
    setYear(new Date().getFullYear());
    setTimeout(() => setFooterVisible(true), 100);

    // Scroll event listener for background effect
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      {/* Main Footer with Gaming Tech Colors */}
      <footer className={`relative py-20 px-4 bg-[#0b2b4f] transition-all duration-1000 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Background Effect Div */}
        <div className={`absolute inset-0 transition-all duration-500 backdrop-blur-[6px] ${
          isScrolled 
            ? 'bg-[#0b2b4f] border-amber-200 bg-[#0b2b4f] shadow-lg' 
            : 'bg-[#0b2b4f] border -[#14bg2d48] shadow-md'
        }`}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column - Logo + Social */}
            <div className="flex flex-col items-center lg:items-start">
              {/* White Background Logo Box with Gaming Tech Border */}
              <div className="p-4 bg-white rounded-lg shadow-lg mb-4 border border-gray-300">
                <Image
                  src="/images/Eraflip-logo-png-scaled-e1756981494806-1024x720-1.png"
                  alt="Eraflip Logo"
                  width={200}
                  height={144}
                  className="h-36 w-auto object-contain"
                  priority
                />
              </div>

              <div className="flex gap-3 mt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#0b2b4f]  text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.twitter.com/YourUsername" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#0b2b4f] text-white hover:bg-blue-400 hover:border-blue-400 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#0b2b4f] text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500 hover:border-transparent hover:text-white transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="flex gap-3 mt-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] transition-all duration-300">
                    <Linkedin className="h-3 w-3 mr-1" />
                    <span className="text-xs">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-red-500 hover:bg-[#0b2b4f] transition-all duration-300">
                    <Youtube className="h-3 w-3 mr-1" />
                    <span className="text-xs">YouTube</span>
                  </Button>
                </a>

                {/* Share dropdown */}
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] transition-all duration-300">
                    <Share2 className="h-3 w-3 mr-1" />
                    <span className="text-xs">Share</span>
                  </Button>

                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-[#0b2b4f] rounded-lg shadow-lg p-2 min-w-[180px] z-50 border">
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] rounded transition-colors"
                    >
                      <Copy className="h-4 w-4 mr-2 text-blue-400" />
                      Copy Link
                    </button>

                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        "Check this out!"
                      )}&url=${encodeURIComponent(url)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-[#0b2b4f] rounded transition-colors"
                    >
                      <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                      Share on Twitter
                    </a>

                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:text-blue-600 hover:bg-[#0b2b4f] rounded transition-colors"
                    >
                      <Facebook className="h-4 w-4 mr-2 text-blue-600 border border-white/30 rounded-full p-0.5" />
                      Share on Facebook
                    </a>

                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        url
                      )}&title=${encodeURIComponent(title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:text-blue-700 hover:bg-[#0b2b4f] rounded transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
                      Share on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Columns - Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Get Free Link</h3>
                <div className="space-y-2">
                  <Link href="/">
                    <Button variant="ghost" className="w-full justify-start text-sm text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] py-1.5 transition-colors duration-300">
                      <HomeIcon className="mr-2 h-4 w-4 text-blue-400" /> Home
                    </Button>
                  </Link>
                  <Link href="/about-us">
                    <Button variant="ghost" className="w-full justify-start text-sm text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] py-1.5 transition-colors duration-300">
                      <Users className="mr-2 h-4 w-4 text-blue-400" /> About Us
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button variant="ghost" className="w-full justify-start text-sm text-gray-300 hover:text-orange-400 hover:bg-[#0b2b4f] py-1.5 transition-colors duration-300">
                      <MessageSquare className="mr-2 h-4 w-4 text-blue-400" /> Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Column 2 - Services */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Services</h3>
                <div className="space-y-2">
                  <Link href="/digital-marketing-ppc-campaigns" className="flex items-center gap-2 p-1 rounded hover:bg-[#0b2b4f] transition-all duration-300 group">
                    <Globe className="h-4 w-4 text-orange-400 group-hover:text-orange-400 transition-colors" /> 
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Digital Marketing</span>
                  </Link>
                  <Link href="/search-engine-optimization" className="flex items-center gap-2 p-1 rounded hover:bg-[#0b2b4f] transition-all duration-300 group">
                    <Search className="h-4 w-4 text-orange-400 group-hover:text-orange-400 transition-colors" /> 
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">SEO</span>
                  </Link>
                  <Link href="/game-development" className="flex items-center gap-2 p-1 rounded hover:bg-[#0b2b4f] transition-all duration-300 group">
                    <Gamepad2 className="h-4 w-4 text-orange-400 group-hover:text-orange-400 transition-colors" /> 
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Game Development</span>
                  </Link>
                  <Link href="/web-development" className="flex items-center gap-2 p-1 rounded hover:bg-[#0b2b4f] transition-all duration-300 group">
                    <Code className="h-4 w-4 text-orange-400 group-hover:text-orange-400 transition-colors" /> 
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Web Development</span>
                  </Link>
                  <Link href="/content-creation" className="flex items-center gap-2 p-1 rounded hover:bg-[#0b2b4f] transition-all duration-300 group">
                    <PenTool className="h-4 w-4 text-orange-400 group-hover:text-orange-400 transition-colors" /> 
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Content Creation</span>
                  </Link>
                </div>
              </div>

              {/* Column 3 - Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Contact US</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Mail className="h-4 w-4 text-orange-400" />
                      <p className="text-sm font-medium text-white">Email</p>
                    </div>
                    <a href="mailto:info@eraflip.com" className="text-sm text-gray-300 hover:text-orange-400 pl-6 transition-colors duration-300">
                      info@eraflip.com
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Phone className="h-4 w-4 text-blue-400" />
                      <p className="text-sm font-medium text-white">Phone</p>
                    </div>
                    <a href="tel:+923097770073" className="text-sm text-gray-300 hover:text-blue-400 pl-6 transition-colors duration-300">
                      +92 309 7770073
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <MapPin className="h-4 w-4 text-white" />
                      <p className="text-sm font-medium text-white">Address</p>
                    </div>
                    <p className="text-sm text-gray-300 pl-6 leading-snug">
                      Office 1, Level #14, Arfa Software Technology Park,<br />
                      Feroxpur Road, Lahore,<br />
                      54000, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright with Gaming Tech Style */}
      <div className="w-full bg-[#0b2b4f] py-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-gray-400 text-xs">
                Copyright © {year} By <span className="text-white font-medium">Eraflip</span>. All Rights Reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-xs transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-400 text-xs transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-orange-400 text-xs transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;