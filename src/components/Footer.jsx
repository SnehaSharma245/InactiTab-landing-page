"use client";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Coffee } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/SnehaSharma245/InactiTab",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/ss0807/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      href: "https://x.com/SnehaDevs",
    },
    {
      name: "Buy me a coffee",
      icon: <Coffee className="w-4 h-4" />,
      href: "https://buymeacoffee.com/snehadevs",
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:snehav2109@gmail.com",
    },
  ];

  return (
    <footer className="bg-transparent py-8 px-4 mt-12 border-t border-[#1a73e8]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left side - Social Links and Copyright */}
          <div className="flex flex-col items-center order-2 md:order-1 mt-8">
            {/* Social Links */}
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0f1a34] hover:bg-[#172443] rounded-full transition-all duration-200 hover:scale-110 text-[#1a73e8] hover:text-white"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Logo and Website Name */}
          <div className="order-1 md:order-2">
            <div className="flex items-center justify-center ">
              <Image
                src="/icon2.png"
                alt="InactiTab Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <div className="flex flex-col">
                <span className="text-[#1a73e8] text-center font-bold text-xl">
                  InactiTab
                </span>
                <span className="text-gray-400 text-xs">
                  Tab Management Made Simple
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center  text-gray-400 text-xs pt-3">
        <p>© 2025 InactiTab. All rights reserved.</p>
        <p className="mt-1">InactiTab | Your Tab Manager 2.0</p>
      </div>
    </footer>
  );
}

export default Footer;
