"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-2 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo and Website Name */}
          <div
            onClick={scrollToTop}
            className="flex items-center space-x-3 cursor-pointer transform transition-all duration-300"
          >
            <div className="relative w-8 h-8 transition-transform duration-300 ">
              <Image
                src="/icon2.png"
                alt="InactiTab Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-[#1a73e8] font-bold text-xl tracking-tight text-glow transition-all duration-300 hover:text-[#4287f5]">
              InactiTab
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("features")}
              className="relative px-4 py-1.5 overflow-hidden font-medium text-sm text-gray-300 bg-transparent rounded-lg group cursor-pointer"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 border-t-2 border-l-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-r-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Features
              </span>
            </button>

            <button
              onClick={() => scrollToSection("installation")}
              className="relative px-4 py-1.5 overflow-hidden font-medium text-sm text-gray-300 bg-transparent rounded-lg group cursor-pointer"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 border-t-2 border-l-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-r-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Installation
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
