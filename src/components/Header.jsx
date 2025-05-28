"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Website Name */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <Image
                src="/favicon.png"
                alt="InactiTab Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="text-[#1a73e8] font-extrabold text-2xl lg:text-3xl tracking-tight text-glow">
              InactiTab
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("features")}
              className="relative px-5 py-2 overflow-hidden font-medium text-gray-300 bg-transparent rounded-lg group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 border-t-2 border-l-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-r-2 border-[#1a73e8] group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Features
              </span>
            </button>

            <button
              onClick={() => scrollToSection("installation")}
              className="relative px-5 py-2 overflow-hidden font-medium text-gray-300 bg-transparent rounded-lg group"
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
